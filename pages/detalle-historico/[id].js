import { useState, useEffect } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Button from "components/Button";
import Historico from "components/Historico";
import { buscarHistoricoEquipo } from "firebase/client";
import Head from "next/head";
import Link from "next/link";
import Volver from "components/icons/Volver";
import { useRouter } from "next/router";

import Reporte from "components/icons/Reporte";

export default function VerDetalle() {
  const [cambios, setCambios] = useState();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    buscarHistoricoEquipo(id, setCambios);
  }, []);

  return (
    <>
      <Head>
        <title>Historico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container">
        <Sidebar />
        <section>
          <h1>Historico de Cambios</h1>
          <div className="card">
            {cambios && <Historico cambios={cambios} />}
          </div>
          <div className="botones">
            <Link href="/historico-cambios">
              <a>
                <Button>
                  <Volver width={24} height={24} fill="#fff" />
                  Volver
                </Button>
              </a>
            </Link>
            {cambios && (
              <Link
                href={`/reporte-cambios/[id]`}
                as={`/reporte-cambios/${id}`}
              >
                <a>
                  <Button>
                    <Reporte width={24} height={24} fill="#fff" />
                    Reporte
                  </Button>
                </a>
              </Link>
            )}
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
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .botones {
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }
        h1 {
          color: red;
          text-align: center;
        }
        a {
          display: flex;
          justify-content: center;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
