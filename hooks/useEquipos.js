import { useEffect, useState } from "react";
import { obtenerEquipos } from "firebase/client";

export default function useEquipos() {
  const [equipos, setEquipos] = useState();
  const [perifericos, setPerifericos] = useState();
  const [proveedores, setProveedores] = useState();

  useEffect(() => {
    obtenerEquipos(setEquipos, setPerifericos, setProveedores);
  }, []);

  return { equipos, perifericos, proveedores };
}
