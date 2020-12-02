import Computadora from "components/icons/Computadora";

export default function Detalle({ equipo, periferico, proveedor }) {
  return (
    <>
      <article>
        <header>
          <div>
            <Computadora width={40} height={40} />
            <h1>Equipo: {equipo.descripcion}</h1>
          </div>
          <h1>Codigo: {equipo.codigo}</h1>
        </header>
        <section>
          <h2>Información Equipo</h2>
          <div>
            <h3>Ubicacion: {equipo.ubicacion}</h3>
            <span> · </span>
            <h3>Usuarios: {equipo.usuario}</h3>
            <span> · </span>
            <h3>Garantía: {equipo.garantia}</h3>
            <span> · </span>
            <h3>Fecha: {equipo.fecha}</h3>
          </div>
          <h2>Perifericos</h2>
          <div>
            <h3>Monitor: {periferico[0].monitor}</h3>
            <span> · </span>
            <h3>Teclado: {periferico[0].teclado}</h3>
            <span> · </span>
            <h3>Mouse: {periferico[0].mouse}</h3>
          </div>
          <h2>Proveedor</h2>
          <div>
            <h3>CUIL: {proveedor[0].cuil}</h3>
            <span> · </span>
            <h3>Nombre: {proveedor[0].nombre}</h3>
            <span> · </span>
            <h3>Apellido: {proveedor[0].apellido}</h3>
          </div>
        </section>
      </article>
      <style jsx>{`
        article {
          width: 80%;
          border: 1px solid #ccc;
          margin: 16px;
          padding: 10px 15px;
        }
        header {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          border-bottom: 1px solid #eee;
          text-align: center;
          font-size: 25px;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h1 {
          margin: 4px;
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
