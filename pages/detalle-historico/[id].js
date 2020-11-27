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

          <Link href="/historico-cambios">
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

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const { id } = params;
//   console.log(id);

//   return firestore
//     .collection("historicoCambios")
//     .where("idEquipo", "==", `${id}`)
//     .get()
//     .then((snapshot) => {
//       const data = snapshot.docs.map((doc) => {
//         const data = doc.data();
//         return data;
//       });

//       JSON.stringify(data);

//       const props = {
//         ...data,
//       };
//       return { props: props };
//     })
//     .catch(() => {
//       return { props: {} };
//     });
// }
