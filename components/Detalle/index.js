import Button from "components/Button";
import Link from "next/link";

export default function Detalle({ equipo, periferico }) {
  console.log(equipo, periferico);
  return (
    <>
      <article>
        <header>
          <h1>Equipo: {equipo.descripcion}</h1>
        </header>
        <section>
          <h2>Informacion Equipo</h2>
          <div>
            <h3>Ubicacion: {equipo.ubicacion}</h3>
            <span> · </span>
            <h3>Usuarios: milo, andres</h3>
          </div>
          <h2>Perifericos</h2>
          <div>
            <h3>Monitor: {periferico[0].monitor}</h3>
            <span> · </span>
            <h3>Teclado: {periferico[0].teclado}</h3>
            <span> · </span>
            <h3>Mouse: {periferico[0].mouse}</h3>
          </div>
        </section>
      </article>
      <style jsx>{`
        article {
          width: 50%;
          border: 1px solid #ccc;
          margin: 16px;
          padding: 10px 15px;
        }
        header {
          border-bottom: 1px solid #eee;
          text-align: center;
          font-size: 25px;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h2 {
          text-decoration: underline;
          text-align: center;
        }
        h3 {
          margin: 8px;
        }
        span {
          font-size: 40px;
        }
      `}</style>
    </>
  );
}
