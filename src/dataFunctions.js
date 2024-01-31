export const filterData = (data, filterBy, value) => {
  /*Crear filtro por artista en main
Crear un desplegable recorriendo la información del artdata buscando los artistas para desplegar la lista para que el usario seleccione*/
  //Crear un evento para que al hacer click en el artista recorra la base de datos y cuando encuentre coincidencia despliegue la tarjeta en pantalla
  //  1-Buscar en cada tarjeta el nombre del artista y cuando coincide despliega la tarjeta en pantalla, mostrando todas las que tienen coincidencia
  const paintingsperFilter = [];
  for (const painting of data) {
    if (painting.facts[filterBy] === value) {
      paintingsperFilter.push(painting);
    }
  }
  return paintingsperFilter;
};

//data, filterBy, value
//Crear filtro por artista en main

//Crear un desplegable recorriendo la información del artdata buscando los artistas para desplegar la lista para que el usario seleccione
//Crear un evento para que al hacer click en el artista recorra la base de datos y cuando encuentre coincidencia despliegue la tarjeta en pantalla
//  1-Buscar en cada tarjeta el nombre del artista y cuando coincide despliega la tarjeta en pantalla, mostrando todas las que tienen coincidencia
//  2-Al dar click en el botón limpiar regresa a "home"
//  3- Ordenar (desarrollar aparte)
//Crear orden

export const sortData = (data, sortBy, sortOrder) => {
  const sortedCard = [];
  for (const list of data) {
    sortedCard.push(list);
  }
  if (sortOrder === "asc") {
    sortedCard.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sortOrder === "desc";
    sortedCard.sort((a, b) => b.name.localeCompare(a.name));
  }
  return sortedCard;
};

export const computeStats = (data) => {
  const total = data.length;
  const count = data.reduce((accumulate, category) => {
    accumulate[category.facts.artMovement] =
      (accumulate[category.facts.artMovement] || 0) + 1;
    return accumulate;
  }, {});
  const percentages = {};
  for (const artMovement in count) {
    percentages[artMovement] = (count[artMovement] / total) * 100;
  }
  console.log(percentages);
  return percentages;
};

/*No se está usando
const artName = [];
for (const list of data) {
  const artworkName = list.name;
  artName.push(artworkName);
  artName.sort();
}
console.log(artName);*/
