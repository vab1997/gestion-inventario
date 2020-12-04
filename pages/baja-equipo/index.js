import { useEffect, useState } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Input from "components/Input";
import Button from "components/Button";
import Link from "next/link";
import Head from "next/head";

import useUser from "hooks/useUser";
import useSearch from "hooks/useSearch";
import { obtenerEquipos, bajaEquipo } from "firebase/client";

export default function BajaEquipo() {
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

  const [codigoBaja, setCodigoBaja] = useState({});

  useEffect(() => {
    obtenerEquipos(setEquipos, setPerifericos, setProveedores);
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
      setCodigoBaja({
        idEquipo: filtro.idEquipo,
        idPeriferico: filtro.idPeriferico,
        idProveedor: filtro.idProveedor,
      });
      setInputs(filtro);
    } else {
      setCodigoBaja({});
      limpiarInputs();
    }
  };

  const handleClickEliminar = () => {
    if (codigoBaja) {
      try {
        bajaEquipo(codigoBaja);
        limpiarInputs();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Baja Equipo</title>
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
              {codigoBaja.length === 0 && <h4>No se encontro equipo.</h4>}
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
                    disabled={"disabled"}
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
                  <Input
                    type={"text"}
                    placeholder={"Ubicación en la Empresa"}
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    disabled={"disabled"}
                  />
                  <label>Garantía:</label>
                  <Input
                    type={"date"}
                    placeholder={"Garantía"}
                    value={garantia}
                    onChange={(e) => setGarantia(e.target.value)}
                    disabled={"disabled"}
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
                    disabled={"disabled"}
                  />
                  <label>Teclado: </label>
                  <Input
                    type={"text"}
                    placeholder={"Teclado"}
                    value={teclado}
                    onChange={(e) => setTeclado(e.target.value)}
                    disabled={"disabled"}
                  />
                  <label>Mouse: </label>
                  <Input
                    type={"text"}
                    placeholder={"Mouse"}
                    value={mouse}
                    onChange={(e) => setMouse(e.target.value)}
                    disabled={"disabled"}
                  />
                  <h3>Usuarios Asignados</h3>
                  <label>Usuarios: </label>
                  <Input
                    type={"text"}
                    placeholder={"Usuarios"}
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    disabled={"disabled"}
                  />
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
              <Button onClick={handleClickEliminar}>Eliminar</Button>
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
