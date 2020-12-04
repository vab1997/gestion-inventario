import { useState, useEffect } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Input from "components/Input";
import Button from "components/Button";
import useUser from "hooks/useUser";

import {
  registrarEquiposPerifericos,
  obtenerUbicaciones,
  obtenerUsuarios,
} from "firebase/client";
import Link from "next/link";
import Head from "next/head";
import useEquipos from "hooks/useEquipos";

export default function NuevoEquipo() {
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

  const [ubicaciones, setUbicaciones] = useState();
  const [usuarios, setUsuarios] = useState();

  const [verificarRegistro, setVerificarRegistro] = useState(null);
  const [validarForm, setValidarForm] = useState(null);

  const [mensajeExistencia, setMensajeExistencia] = useState(false);

  console.log(mensajeExistencia);

  const { equipos } = useEquipos();
  // console.log(mensajeExistencia);

  const user = useUser();

  useEffect(() => {
    obtenerUbicaciones(setUbicaciones);
    obtenerUsuarios(setUsuarios);
  }, []);

  const limpiarInputs = () => {
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

  const validarExistencia = () => {
    let existe = false;
    const resultado = equipos.filter((equipo) => equipo.codigo === codigo);

    if (resultado.length !== 0) {
      existe = true;
    }

    return existe;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarExistencia()) {
      setMensajeExistencia(true);
    } else {
      setMensajeExistencia(false);
    }

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
      registrarEquiposPerifericos({
        codigo,
        descripcion,
        fecha,
        ubicacion,
        monitor,
        teclado,
        mouse,
        usuario,
        cuil,
        nombre,
        apellido,
        garantia,
        user: user.displayName,
      })
        .then(() => {
          setVerificarRegistro(true);
        })
        .catch(() => {
          setVerificarRegistro(false);
        });

      setValidarForm(false);
    } else {
      setValidarForm(true);
    }

    limpiarInputs();
  };

  return (
    <>
      <Head>
        <title>Nuevo Equipo</title>
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
            <form onSubmit={handleSubmit}>
              <div className="inputs-container">
                <div className="inputs">
                  <h3>Informacion del Equipo</h3>
                  <label>Codigo: </label>
                  <Input
                    type={"text"}
                    placeholder={"Codigo"}
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
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
                  />
                  <label>Ubicación: </label>
                  <select onChange={(e) => setUbicacion(e.target.value)}>
                    <option disabled selected>
                      Seleccionar Ubicación
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
                      Seleccionar Usuario
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
                  />
                  <label>Nombre:</label>
                  <Input
                    type={"text"}
                    placeholder={"Nombre"}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <label>Apellido:</label>
                  <Input
                    type={"text"}
                    placeholder={"Apellido"}
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
              </div>
              <Button>Guardar</Button>
              {verificarRegistro && (
                <h4 className="success">Equipo Registrado.</h4>
              )}
              {verificarRegistro === false && (
                <h4 className="error">Hubo un error al Registrar Equipo.</h4>
              )}
              {validarForm && (
                <h4 className="error">Todos los campos son obligatorios.</h4>
              )}
              {mensajeExistencia && <h4 className="error">Equipo Existente</h4>}
            </form>
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
        }
        .formulario {
          display: flex;
          justify-content: center;
          background: #fff;
          border: 0.5px solid;
          border-radius: 16px;
          padding: 8px;
          margin-right: 16px;
          margin-bottom: 8px;
        }
        .botones {
          display: flex;
          justify-content: center;
          margin-buttom: 4px;
        }
        .inputs-container {
          display: flex;
        }
        .inputs {
          width: 80%;
          margin: 0 32px;
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        h1 {
          text-align: center;
          color: #364250;
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
        .success {
          text-align: center;
          color: green;
        }
        .error {
          text-align: center;
          color: red;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
