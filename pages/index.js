import Head from "next/head";
import Link from "next/link";
import Button from "components/Button";
import Inventario from "components/icons/Inventario";
import Gmail from "components/icons/Gmail";
import GitHub from "components/icons/Github";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Gestión de Inventario</h1>
        <Inventario width={50} height={50} fill="#fff" />
        <div>
          <h2>Iniciar Sesión</h2>
          <form>
            <input type="text" placeholder="nombre" />
            <input type="password" placeholder="password" />
            <Button>Iniciar Sesión</Button>
          </form>
          <section className="login-cuentas">
            <Button title="Github">
              <GitHub fill="#fff" width={24} height={24} />
            </Button>
            <Button title="Gmail">
              <Gmail fill="#fff" width={24} height={24} />
            </Button>
          </section>
          <Link href="/nuevo-usuario">
            <a>Crear Nueva Cuenta</a>
          </Link>
        </div>
      </section>

      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
          background: #22445c;
        }
        div {
          background: #fff;
          width: 100%;
          heigh: 100%;
          border: 0.5px solid;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.6);
          border-radius: 16px;
          padding: 10px;
          margin: 8px;
        }
        .login-cuentas {
          background: #fff;
          display: flex;
          justify-content: center;
          margin-top: 4px;
        }
        h1 {
          color: #fff;
          margin-bottom: 4px;
          font-weight: 600;
        }
        h2 {
          text-align: center;
          font-size: 20px;
          font-weight: 600;
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0;
        }
        input {
          font-size: 16px;
          border-radius: 50px;
          border: solid 1px;
          margin: 8px;
          padding: 8px;
          outline: none;
        }
        a {
          display: flex;
          flex-direction: row-reverse;
          color: #0d8bf1;
          text-decoration: none;
          margin: 4px;
        }
      `}</style>
    </>
  );
}
