import { useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import NuevoUsuarioIcon from "components/icons/NuevoUsuarioIcon";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import { crearUsuarioEmailPassword } from "firebase/client";

export default function NuevoUsuario() {
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("asd");
    crearUsuarioEmailPassword({ nombre, email, password }).catch((error) =>
      console.log(error)
    );
  };

  return (
    <>
      <Head>
        <title>Crear Nuevo Usuario</title>
      </Head>
      <section>
        <h1>Crear Nuevo Usuario</h1>
        <NuevoUsuarioIcon width={64} height={64} fill="#fff" />
        <div>
          <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <Input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label>Email: </label>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Contraseña: </label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
          font-weight: 600;
          font-size: 24px;
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
