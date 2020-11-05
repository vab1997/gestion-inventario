export default function useSearch(equipos, perifericos, buscar) {
  const busqueda = buscar.toLowerCase();
  const equipo = equipos.filter((equipo) => {
    return equipo.codigo.toLowerCase().includes(busqueda);
  });
  const periferico = perifericos.filter((periferico) => {
    return periferico.codigoEquipo.toLowerCase().includes(busqueda);
  });

  if (equipo.length !== 0) {
    const filtro = {
      codigo: equipo[0].codigo,
      descripcion: equipo[0].descripcion,
      fecha: equipo[0].fecha,
      ubicacion: equipo[0].ubicacion,
      monitor: periferico[0].monitor,
      teclado: periferico[0].teclado,
      mouse: periferico[0].mouse,
      idEquipo: equipo[0].id,
      idPeriferico: periferico[0].id,
    };

    return filtro;
  }
}
