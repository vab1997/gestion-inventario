import Link from "next/link";
import Gestion from "components/icons/Gestion";

export default function Sidebar() {
  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          <li>
            {/* <Gestion width={32} height={32} /> */}
            <Link href="/nuevo-equipo">
              <a>
                <span>Gestion Equipos</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/historico-cambios">
              <a>
                <span>Historicos de Cambios</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ubicacion-equipo">
              <a>
                <span>Ubicación de Equipos</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          background: #eee;
          padding: 0 8px 8px 0;
          height: 100%;
          width: 20%;
          border: 1px solid #eee;
          overflow: hidden;
        }
        h2 {
          text-align: center;
          margin-bottom: 8px;
        }
        ul {
          list-style: none;
          widht: 100%;
          margin-top: 0;
        }
        li {
          padding: 0.5em 1em 0.5em 0;
          font-size: 1.2em;
          transition: all 0.15s linear;
          cursor: pointer;
          widht: 100%;
        }
        ul li:hover {
          background-color: white;
        }
        a {
          color: black;
          text-decoration: none;
        }
        span {
          text-align: center;
        }
      `}</style>
    </>
  );
}
