import useTimeAgo from "hooks/useTimeAgo";
import useDateTimeFormat from "hooks/useDateTimeFormat";

export default function TablaHistorico({
  descripcion,
  fecha,
  monitor,
  teclado,
  mouse,
  user,
}) {
  const createdAt = +fecha.toDate();
  const timeago = useTimeAgo(createdAt);
  const createdAtFormated = useDateTimeFormat(createdAt);

  return (
    <>
      <tr>
        <td>
          <time title={createdAtFormated}>{timeago}</time>
        </td>
        <td>{monitor}</td>
        <td>{teclado}</td>
        <td>{mouse}</td>
        <td>{user}</td>
      </tr>

      <style jsx>{`
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
      `}</style>
    </>
  );
}
