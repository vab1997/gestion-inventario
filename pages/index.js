import { useState, useEffect } from "react";
import Button from "components/Button";
import Input from "components/Input";
import Inventario from "components/icons/Inventario";
import Gmail from "components/icons/Gmail";
import GitHub from "components/icons/Github";
import Head from "next/head";
import Link from "next/link";

import {
  loginEmailPassword,
  loginConGithub,
  loginConGoogle,
} from "firebase/client";
import { useRouter } from "next/router";
import useUser, { USER_STATE } from "hooks/useUser";
import Spinner from "components/Spinner";

export default function Home() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    loginEmailPassword({ email, password }).catch((error) =>
      console.log(error)
    );
  };

  const handleClickGithub = () => {
    loginConGithub().catch((error) => {
      console.log(error);
    });
  };

  const handleClickGoogle = () => {
    console.log("asd");
    loginConGoogle().catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1>Gestión de Inventario</h1>
        <Inventario width={64} height={64} fill="#fff" />
        {user === USER_STATE.NOT_LOGGED && (
          <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <label>Email: </label>
              <Input
                type={"text"}
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Contraseña: </label>
              <Input
                type={"password"}
                placeholder={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button>Iniciar Sesión</Button>
            </form>
            <section className="login-cuentas">
              <Button onClick={handleClickGithub} title="Github">
                <GitHub fill="#fff" width={24} height={24} />
              </Button>
              <Button onClick={handleClickGoogle} title="Gmail">
                <Gmail fill="#fff" width={24} height={24} />
              </Button>
            </section>
            <Link href="/nuevo-usuario">
              <a>Crear Nueva Cuenta</a>
            </Link>
          </div>
        )}
        <span>{user === USER_STATE.NOT_KNOW && <Spinner />}</span>
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
        span {
          margin-top: 32px;
          margin-right: 80px;
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
          font-size: 24px;
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
