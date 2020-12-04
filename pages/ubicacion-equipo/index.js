import { useEffect, useState } from "react";
import Equipo from "components/Equipo";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Button from "components/Button";
import Reporte from "components/icons/Reporte";
import useUser from "hooks/useUser";

import { obtenerEquipos } from "firebase/client";
import Link from "next/link";
import Head from "next/head";

export default function UbicacionEquipo() {
  const [equipos, setEquipos] = useState();
  const [perifericos, setPerifericos] = useState();
  const [proveedores, setProveedores] = useState();

  useEffect(() => {
    obtenerEquipos(setEquipos, setPerifericos, setProveedores);
  }, []);

  return (
    <>
      <Head>
        <title>Ubicación Equipos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <Sidebar />
        <section>
          <h1>Ubicación Equipos</h1>
          <div className="table">
            <Equipo
              equipos={equipos}
              perifericos={perifericos}
              boton={"ver detalle"}
            />
            <div className="reporte">
              <Link href="/reporte-equipos">
                <a>
                  <Button>
                    <Reporte width={24} height={24} fill="#fff" />
                    Generar Reporte
                  </Button>
                </a>
              </Link>
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
        .reporte {
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }
        section {
          border: 1px solid #eee;
          width: 100%;
          height: 100%;
          padding: 4px 0 4px 16px;
          overflow: hidden;
        }
        h1 {
          color: #364250;
          text-align: center;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
