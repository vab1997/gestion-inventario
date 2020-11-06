import { useState } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Input from "components/Input";
import Button from "components/Button";

import { registrarEquiposPerifericos } from "firebase/client";
import Link from "next/link";

export default function NuevoEquipo() {
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [monitor, setMonitor] = useState("");
  const [teclado, setTeclado] = useState("");
  const [mouse, setMouse] = useState("");

  const [verificarRegistro, setVerificarRegistro] = useState(null);
  const [validarForm, setValidarForm] = useState(null);

  const limpiarInputs = () => {
    setCodigo("");
    setDescripcion("");
    setFecha("");
    setUbicacion("");
    setMonitor("");
    setTeclado("");
    setMouse("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      codigo.trim() !== "" &&
      descripcion.trim() !== "" &&
      fecha.trim() !== "" &&
      ubicacion.trim() !== "" &&
      monitor.trim() !== "" &&
      teclado.trim() !== "" &&
      mouse.trim() !== ""
    ) {
      registrarEquiposPerifericos({
        codigo,
        descripcion,
        fecha,
        ubicacion,
        monitor,
        teclado,
        mouse,
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
                    placeholder={"Nombre"}
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
                  <Input
                    type={"text"}
                    placeholder={"Ubicación en la Empresa"}
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
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
        form {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        h1 {
          text-align: center;
          color: red;
        }
        .success {
          text-align: center;
          color: green;
        }
        .error {
          text-align: center;
          color: red;
        }
      `}</style>
    </>
  );
}
