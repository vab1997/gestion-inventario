import { useEffect, useState } from "react";
import Button from "components/Button";
import Volver from "components/icons/Volver";
import useEquipos from "hooks/useEquipos";
import Link from "next/link";

export default function ReporteEquipos() {
  const [equiposPerifericos, setEquiposPerifericos] = useState();
  const [listadoEquipos, setListadoEquipos] = useState();

  const { equipos, perifericos } = useEquipos();

  useEffect(() => {
    if (equipos && perifericos) {
      setEquiposPerifericos(
        equipos.map((equipo) => {
          for (var i = 0; i < perifericos.length; i++) {
            if (perifericos[i].codigoEquipo === equipo.codigo) {
              return { equipo: equipo, periferico: perifericos[i] };
            }
          }
        })
      );
    }
  }, [equipos, perifericos]);

  console.log(
    equipos &&
      equipos.map((equipo) => {
        // console.log(new Date("2020/12/04"), equipo.garantia);
        console.log(new Date(equipo.garantia) < new Date("2020/12/04") && true);
      })
  );

  return (
    <>
      <Link href="/ubicacion-equipo">
        <a>
          <Button>
            <Volver width={24} height={24} fill="#fff" />
            Volver
          </Button>
        </a>
      </Link>
      <div>
        <h1>Reporte de Equipos con su Ubicación</h1>
        <table>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Equipo</th>
              <th>Fecha Alta</th>
              <th>Ubicación</th>
              <th>Monitor</th>
              <th>Teclado</th>
              <th>Mouse</th>
              <th>Creado Por</th>
              <th>Garantía</th>
            </tr>
          </thead>
          {equiposPerifericos &&
            equiposPerifericos.map(({ equipo, periferico }) => (
              <tr>
                <td>{equipo.codigo}</td>
                <td>{equipo.descripcion}</td>
                <td>{equipo.fecha}</td>
                <td>{equipo.ubicacion}</td>
                <td>{periferico.monitor}</td>
                <td>{periferico.teclado}</td>
                <td>{periferico.mouse}</td>
                <td>{equipo.user}</td>
                {new Date(equipo.garantia) < new Date("2020/12/04") ? (
                  <td className="vencido">{equipo.garantia}</td>
                ) : (
                  <td>{equipo.garantia}</td>
                )}
              </tr>
            ))}
        </table>
      </div>
      <style jsx>{`
        div {
          margin: 8px;
          border: 1px solid #bbb;
          height: 100%;
        }
        h1 {
          text-align: center;
          color: #00405c;
          text-decoration: underline;
        }
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
        }
        td {
          padding: 10px;
          text-align: center;
        }
        a {
          text-decoration: none;
        }

        .vencido {
          color: red;
        }
      `}</style>
    </>
  );
}
