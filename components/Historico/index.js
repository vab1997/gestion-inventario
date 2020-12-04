import Computadora from "components/icons/Computadora";
import TablaHistorico from "components/TablaHistorico";

export default function Historico({ cambios }) {
  return (
    <>
      <div className="descripcion-equipo">
        <Computadora width={40} height={40} />
        <h2>
          Equipo:
          {cambios ? cambios[0].descripcion : null}
        </h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Fecha de Modificación</th>
            <th>Monitor</th>
            <th>Teclado</th>
            <th>Mouse</th>
            <th>Modificado por</th>
          </tr>
        </thead>
        {cambios &&
          cambios.map(
            ({
              idEquipo,
              descripcion,
              fecha,
              monitor,
              teclado,
              mouse,
              user,
            }) => (
              <TablaHistorico
                id={idEquipo}
                descripcion={descripcion}
                fecha={fecha}
                monitor={monitor}
                teclado={teclado}
                mouse={mouse}
                user={user}
              />
            )
          )}
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
        thead {
          background-color: #246355;
          border-bottom: solid 5px #0f362d;
          color: white;
        }
        h2 {
          text-align: center;
          margin-left: 4px;
        }
        h3 {
          text-align: center;
          color: #364250;
        }
        .descripcion-equipo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
