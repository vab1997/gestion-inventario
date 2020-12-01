import Button from "components/Button";
import Link from "next/link";

export default function Equipo({ equipos, perifericos, boton }) {
  // console.log(equipos, perifericos);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Ubicación</th>
            <th>Detalle</th>
          </tr>
        </thead>
        {equipos &&
          equipos.map((equipo) => (
            <tr>
              <td>{equipo.descripcion}</td>
              <td>{equipo.ubicacion}</td>
              <td>
                {boton === "ver detalle" && (
                  <Link
                    href={`/ver-detalle/[id]`}
                    as={`/ver-detalle/${equipo.id}`}
                  >
                    <a>
                      <Button>{boton}</Button>
                    </a>
                  </Link>
                )}
                {boton === "Ver Historico Cambios" && (
                  <Link
                    href={`/detalle-historico/[id]`}
                    as={`/detalle-historico/${equipo.id}`}
                  >
                    <a>
                      <Button>{boton}</Button>
                    </a>
                  </Link>
                )}
              </td>
            </tr>
          ))}
      </table>
      <style jsx>{`
        table {
          background-color: white;
          text-align: left;
          border-collapse: collapse;
          width: 100%;
        }
        th {
          padding: 20px;
          text-align: center;
        }
        td {
          padding: 10px;
          text-align: center;
        }
        a {
          display: flex;
          justify-content: center;
          text-decoration: none;
        }
        thead {
          background-color: #246355;
          border-bottom: solid 5px #0f362d;
          color: white;
        }

        tr:nth-child(even) {
          background-color: #ddd;
        }

        tr:hover td {
          background-color: #369681;
          color: white;
          text-align: center;
        }
      `}</style>
    </>
  );
}
