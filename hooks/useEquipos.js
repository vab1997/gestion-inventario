import { useEffect, useState } from "react";
import useUser from "hooks/useUser";
import { obtenerEquipos } from "firebase/client";

export default function useEquipos() {
  const [equipos, setEquipos] = useState();
  const [perifericos, setPerifericos] = useState();
  const [proveedores, setProveedores] = useState();

  const user = useUser();

  useEffect(() => {
    let unsubscribe;

    if (user) {
      obtenerEquipos(setEquipos, setPerifericos, setProveedores);
    }

    return () => unsubscribe && unsubscribe();
  }, []);

  return { equipos, perifericos, proveedores };
}
