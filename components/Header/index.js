import Button from "components/Button";
import Avatar from "components/Avatar";
import { signout } from "firebase/client";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    signout()
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header>
        <Link href="/home">
          <a>
            <h3>Gestion Inventario</h3>
          </a>
        </Link>
        <Avatar />
        <Button onClick={handleClick}>Cerrar Sesión</Button>
      </header>
      <style jsx>{`
        header {
          background: #eee;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
          padding: 8px 10px;
          font-size: 16px;
          position: sticky;
          top: 0;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </>
  );
}
