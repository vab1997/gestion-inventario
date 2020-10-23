import Button from "components/Button";
import Input from "components/Input";
import NuevoUsuarioIcon from "components/icons/NuevoUsuarioIcon";
import Link from "next/link";
import Head from "next/head";

export default function NuevoUsuario() {
  return (
    <>
      <Head>
        <title>Crear Nuevo Usuario</title>
      </Head>
      <section>
        <h1>Crear Nuevo Usuario</h1>
        <NuevoUsuarioIcon width={64} height={64} fill="#fff" />
        <div>
          <form>
            <Input type="text" placeholder="Nombre" />
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Crear Cuenta</Button>
          </form>
          <Link href="/">
            <a>Volver</a>
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
        h1 {
          color: #fff;
          margin-bottom: 8px;
        }
        div {
          border: 1px solid;
          border-radius: 16px;
          padding: 24px 24px;
          background: #fff;
          margin: 8px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        a {
          text-decoration: none;
          color: #0d8bf1;
        }
      `}</style>
    </>
  );
}
