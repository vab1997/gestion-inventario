import { useState, useEffect } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Detalle from "components/Detalle";
import Button from "components/Button";
import useEquipos from "hooks/useEquipos";
import Volver from "components/icons/Volver";

import { firestore } from "firebase/admin";
import Link from "next/link";

export default function VerDetalle(props) {
  const equipo = props;
  const [periferico, setPeriferico] = useState();
  const [proveedor, setProveedor] = useState();

  const equiposPeri = useEquipos();

  const { perifericos, proveedores } = equiposPeri;

  useEffect(() => {
    if (perifericos) {
      setPeriferico(
        perifericos.filter(
          (periferico) => periferico.codigoEquipo === props.codigo
        )
      );
    }
    if (proveedores) {
      setProveedor(
        proveedores.filter(
          (proveedor) => proveedor.codigoEquipo === props.codigo
        )
      );
    }
  }, [perifericos, proveedores]);

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <section>
          <h1>Detalle Equipo</h1>
          <div className="card">
            {periferico && proveedor && (
              <Detalle
                equipo={equipo}
                periferico={periferico}
                proveedor={proveedor}
              />
            )}
          </div>
          <Link href="/ubicacion-equipo">
            <a>
              <Button>
                <Volver width={16} height={16} fill="#fff" />
                Volver
              </Button>
            </a>
          </Link>
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
          justify-content: center;
        }
        h1 {
          color: #364250;
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

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  return firestore
    .collection("equipos")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();

      const props = {
        ...data,
      };
      return { props: props };
    })
    .catch(() => {
      return { props: {} };
    });
}
