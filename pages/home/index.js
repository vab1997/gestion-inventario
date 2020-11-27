import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Inventario from "components/icons/Inventario";
import useUser from "hooks/useUser";
import Head from "next/head";

export default function HomePage() {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <Sidebar />
        <section>
          <Inventario width={450} height={450} />
          <h3>Sistema Gestión de Inventario</h3>
        </section>
      </div>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          height: 100%;
        }
        section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
      `}</style>
    </>
  );
}
