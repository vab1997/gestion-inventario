import { useState, useEffect } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Equipo from "components/Equipo";
import useUser from "hooks/useUser";

import { obtenerEquipos } from "firebase/client";

export default function HistoricoCambios() {
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
          <h1>Historico de Cambios</h1>
          <div className="table">
            <Equipo
              equipos={equipos}
              perifericos={perifericos}
              boton={"Ver Historico Cambios"}
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
