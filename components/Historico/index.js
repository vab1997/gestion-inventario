import TablaHistorico from "components/TablaHistorico";

export default function Historico({ cambios }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Fecha</th>
            <th>Monitor</th>
            <th>Teclado</th>
            <th>Mouse</th>
          </tr>
        </thead>
        {cambios &&
          cambios.map(
            ({ idEquipo, descripcion, fecha, monitor, teclado, mouse }) => (
              <TablaHistorico
                id={idEquipo}
                descripcion={descripcion}
                fecha={fecha}
                monitor={monitor}
                teclado={teclado}
                mouse={mouse}
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
        }
        td {
          padding: 10px;
        }

        thead {
          background-color: #246355;
          border-bottom: solid 5px #0f362d;
          color: white;
        }
      `}</style>
    </>
  );
}
