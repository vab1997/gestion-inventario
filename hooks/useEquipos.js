import { useEffect, useState } from "react";
import { obtenerEquipos } from "firebase/client";

export default function useEquipos() {
  const [equipos, setEquipos] = useState();
  const [perifericos, setPerifericos] = useState();

  useEffect(() => {
    const obtenerEquiposPeri = async () => {
      await obtenerEquipos(setEquipos, setPerifericos);
    };
    obtenerEquiposPeri();
  }, []);

  return { equipos, perifericos };
}
