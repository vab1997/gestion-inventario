export default function useSearch(equipos, perifericos, proveedores, buscar) {
  const busqueda = buscar.toLowerCase();
  const equipo = equipos.filter((equipo) => {
    return equipo.codigo.toLowerCase().includes(busqueda);
  });
  const periferico = perifericos.filter((periferico) => {
    return periferico.codigoEquipo.toLowerCase().includes(busqueda);
  });
  const proveedor = proveedores.filter((proveedor) => {
    return proveedor.codigoEquipo.toLowerCase().includes(busqueda);
  });

  if (equipo.length !== 0) {
    const filtro = {
      idEquipo: equipo[0].id,
      idPeriferico: periferico[0].id,
      idProveedor: proveedor[0].id,
      codigo: equipo[0].codigo,
      descripcion: equipo[0].descripcion,
      fecha: equipo[0].fecha,
      ubicacion: equipo[0].ubicacion,
      garantia: equipo[0].garantia,
      usuario: equipo[0].usuario,
      monitor: periferico[0].monitor,
      teclado: periferico[0].teclado,
      mouse: periferico[0].mouse,
      cuil: proveedor[0].cuil,
      nombre: proveedor[0].nombre,
      apellido: proveedor[0].apellido,
    };

    return filtro;
  }
}
