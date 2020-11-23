import Equipo from "components/Equipo";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { obtenerEquipos } from "firebase/client";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";

export default function UbicacionEquipo() {
  const [equipos, setEquipos] = useState();
  const [perifericos, setPerifericos] = useState();

  const user = useUser();

  // console.log(equipos, perifericos);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      obtenerEquipos(setEquipos, setPerifericos);
    }

    return () => unsubscribe && unsubscribe();
  }, [user]);

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <section>
          <h1>Ubicación Equipos</h1>
          <div className="table">
            <Equipo
              equipos={equipos}
              perifericos={perifericos}
              boton={"ver detalle"}
            />
          </div>
        </section>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 100%;
        }
        section {
          border: 1px solid #eee;
          width: 100%;
          height: 100%;
          padding: 4px 0 4px 16px;
          overflow: hidden;
        }
        h1 {
          color: red;
          text-align: center;
        }
      `}</style>
    </>
  );
}
