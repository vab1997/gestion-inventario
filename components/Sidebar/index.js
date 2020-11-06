import Link from "next/link";
import Gestion from "components/icons/Gestion";

export default function Sidebar() {
  return (
    <>
      <div>
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
            <Link href="">
              <a>
                <span>Historicos de Cambios</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                <span>Ubicación de Equipos</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        div {
          background: #eee;
          padding: 0 8px 8px 12px;
          height: 100%;
          width: 20%;
          border: 1px solid #eee;
        }
        h2 {
          text-align: center;
          margin-bottom: 8px;
        }
        ul {
          list-style: none;
          margin-top: 0;
        }
        li {
          padding: 0.5em 1em 0.5em 0;
          font-size: 1.2em;
          transition: all 0.15s linear;
          cursor: pointer;
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
