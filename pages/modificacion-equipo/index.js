import { useEffect, useState } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Input from "components/Input";
import Button from "components/Button";
import Link from "next/link";
import Head from "next/head";
import useUser from "hooks/useUser";

import useSearch from "hooks/useSearch";
import {
  obtenerEquipos,
  actualizarEquipo,
  obtenerUsuarios,
  obtenerUbicaciones,
} from "firebase/client";

export default function ModificacionEquipo() {
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [monitor, setMonitor] = useState("");
  const [teclado, setTeclado] = useState("");
  const [mouse, setMouse] = useState("");

  const [usuario, setUsuario] = useState("");
  const [cuil, setCuil] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [garantia, setGarantia] = useState("");

  const [buscar, setBuscar] = useState("");
  const [equipos, setEquipos] = useState();
  const [perifericos, setPerifericos] = useState();
  const [proveedores, setProveedores] = useState();

  const [codigoModificacion, setCodigoModificacion] = useState({});

  const [ubicaciones, setUbicaciones] = useState();
  const [usuarios, setUsuarios] = useState();

  const [verificarActualizacion, setVerificarActualizacion] = useState(null);
  const [validarCampos, setValidarCampos] = useState(null);

  const user = useUser();

  useEffect(() => {
    obtenerEquipos(setEquipos, setPerifericos, setProveedores);
    obtenerUbicaciones(setUbicaciones);
    obtenerUsuarios(setUsuarios);
  }, []);

  const limpiarInputs = () => {
    setBuscar("");
    setCodigo("");
    setDescripcion("");
    setFecha("");
    setUbicacion("");
    setMonitor("");
    setTeclado("");
    setMouse("");
    setUsuario("");
    setCuil("");
    setNombre("");
    setApellido("");
    setGarantia("");
  };

  const setInputs = (filtro) => {
    setCodigo(filtro.codigo);
    setDescripcion(filtro.descripcion);
    setFecha(filtro.fecha);
    setUbicacion(filtro.ubicacion);
    setMonitor(filtro.monitor);
    setTeclado(filtro.teclado);
    setMouse(filtro.mouse);
    setUsuario(filtro.usuario);
    setCuil(filtro.cuil);
    setNombre(filtro.nombre);
    setApellido(filtro.apellido);
    setGarantia(filtro.garantia);
  };

  const handleClickBuscar = () => {
    const filtro = useSearch(equipos, perifericos, proveedores, buscar);

    if (filtro !== undefined) {
      setCodigoModificacion({
        idEquipo: filtro.idEquipo,
        idPeriferico: filtro.idPeriferico,
        idProveedor: filtro.idProveedor,
      });
      setInputs(filtro);
    } else {
      setCodigoModificacion({});
      limpiarInputs();
    }
  };

  const handleClickActualizar = () => {
    if (codigoModificacion) {
      if (
        codigo.trim() !== "" &&
        descripcion.trim() !== "" &&
        fecha.trim() !== "" &&
        ubicacion.trim() !== "" &&
        monitor.trim() !== "" &&
        teclado.trim() !== "" &&
        mouse.trim() !== "" &&
        usuario.trim() !== "" &&
        cuil.trim() !== "" &&
        nombre.trim() !== "" &&
        apellido.trim() !== "" &&
        garantia.trim() !== ""
      ) {
        try {
          actualizarEquipo({
            idEquipo: codigoModificacion.idEquipo,
            idPeriferico: codigoModificacion.idPeriferico,
            descripcion,
            fecha,
            ubicacion,
            monitor,
            teclado,
            mouse,
            usuario,
            user: user.displayName,
          });
          setVerificarActualizacion(true);
          limpiarInputs();
        } catch (e) {
          console.log(e);
          setVerificarActualizacion(false);
        }
      } else {
        setValidarCampos(true);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Modificacion Equipo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <Sidebar />
        <section>
          <h1>Gestión de Equipos</h1>
          <div className="botones">
            <Link href="/nuevo-equipo">
              <a>
                <Button>Alta</Button>
              </a>
            </Link>
            <Link href="/baja-equipo">
              <a>
                <Button>Baja</Button>
              </a>
            </Link>
            <Link href="/modificacion-equipo">
              <a>
                <Button>Modificacion</Button>
              </a>
            </Link>
          </div>
          <div className="formulario">
            <div className="container-form">
              <div className="buscador">
                <Input
                  type="text"
                  placeholder="Buscar Equipo"
                  value={buscar}
                  onChange={(e) => setBuscar(e.target.value)}
                />
                <Button onClick={handleClickBuscar}>Buscar</Button>
              </div>
              {codigoModificacion.length === 0 && (
                <h4>No se encontro equipo.</h4>
              )}
              <div className="inputs-container">
                <div className="inputs">
                  <h3>Informacion del Equipo</h3>
                  <label>Codigo: </label>
                  <Input
                    type={"text"}
                    placeholder={"Codigo"}
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    disabled={"disabled"}
                  />
                  <label>Descripcion: </label>
                  <Input
                    type={"text"}
                    placeholder={"Descripcion"}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                  <label>Fecha: </label>
                  <Input
                    type={"date"}
                    placeholder={"Fecha"}
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    disabled={"disabled"}
                  />
                  <label>Ubicación: </label>
                  <select onChange={(e) => setUbicacion(e.target.value)}>
                    <option disabled selected>
                      {ubicacion ? ubicacion : "Seleccionar Usuario"}
                    </option>
                    {ubicaciones &&
                      ubicaciones.map(({ nombre }) => (
                        <option key={nombre} value={nombre}>
                          {nombre}
                        </option>
                      ))}
                  </select>
                  <label>Garantía:</label>
                  <Input
                    type={"date"}
                    placeholder={"Garantía"}
                    value={garantia}
                    onChange={(e) => setGarantia(e.target.value)}
                  />
                </div>
                <div className="inputs">
                  <h3>Perifericos del Equipo</h3>
                  <label>Monitor: </label>
                  <Input
                    type={"text"}
                    placeholder={"Monitor"}
                    value={monitor}
                    onChange={(e) => setMonitor(e.target.value)}
                  />
                  <label>Teclado: </label>
                  <Input
                    type={"text"}
                    placeholder={"Teclado"}
                    value={teclado}
                    onChange={(e) => setTeclado(e.target.value)}
                  />
                  <label>Mouse: </label>
                  <Input
                    type={"text"}
                    placeholder={"Mouse"}
                    value={mouse}
                    onChange={(e) => setMouse(e.target.value)}
                  />
                  <h3>Usuario Asignado</h3>
                  <label>Usuario: </label>
                  <select onChange={(e) => setUsuario(e.target.value)}>
                    <option disabled selected>
                      {usuario ? usuario : "Seleccionar Usuario"}
                    </option>
                    {usuarios &&
                      usuarios.map(({ displayName }) => (
                        <option key={displayName} value={displayName}>
                          {displayName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="inputs">
                  <h3>Datos Proveedor</h3>
                  <label>CUIL:</label>
                  <Input
                    type={"text"}
                    placeholder={"CUIL"}
                    value={cuil}
                    onChange={(e) => setCuil(e.target.value)}
                    disabled={"disabled"}
                  />
                  <label>Nombre:</label>
                  <Input
                    type={"text"}
                    placeholder={"Nombre"}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    disabled={"disabled"}
                  />
                  <label>Apellido:</label>
                  <Input
                    type={"text"}
                    placeholder={"Apellido"}
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    disabled={"disabled"}
                  />
                </div>
              </div>
              <Button onClick={handleClickActualizar}>Actualizar</Button>
              {verificarActualizacion && (
                <h4 className="success">Equipo Actualizado.</h4>
              )}
              {verificarActualizacion === false && (
                <h4 className="error">Hubo un error al Actualizar Equipo.</h4>
              )}
              {validarCampos && (
                <h4 className="error">Todos los campos son obligatorios.</h4>
              )}
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 100%;
        }
        section {
          border: 1px solid #eee;
          width: 100%;
          height: 100%;
          padding: 4px 0 4px 16px;
          overflow: hidden;
        }
        .formulario {
          display: flex;
          justify-content: center;
          background: #fff;
          border: 0.5px solid;
          border-radius: 16px;
          padding: 8px;
          margin-right: 16px;
        }
        .botones {
          display: flex;
          justify-content: center;
          margin: 8px;
        }
        .inputs-container {
          display: flex;
        }
        .inputs {
          width: 80%;
          margin: 0 32px;
        }
        .container-form {
          display: flex;
          flex-direction: column;
        }
        .buscador {
          display: flex;
          width: 50%;
          margin: 0 32px;
        }
        .success {
          text-align: center;
          color: green;
        }
        .error {
          text-align: center;
          color: red;
        }
        select {
          font-size: 16px;
          border-radius: 50px;
          border: solid 1px;
          width: 100%;
          margin: 8px 0 8px 0;
          padding: 8px;
          outline: none;
        }
        h1 {
          text-align: center;
          color: #364250;
        }
        h4 {
          color: red;
          margin: 0 32px;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
