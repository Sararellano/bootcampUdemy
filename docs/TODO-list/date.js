// This is our own module

// To see data on module
// console.log(module);


// Si sólo quieres 1 función (sólo getDate()), puedes quitar el .getDate
module.exports.getDate = getDate;

function getDate() {

  // Si es weekend or weekday
  const today = new Date(),
    options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };

  return today.toLocaleDateString('en-US', options);
}

// Si quiero añadir más funciones:
// module.exports.getDay = getDay;

// Pero puedo hacerlo más corto:

module.exports.getDay = function () {

  const today = new Date(),
    options = {
      weekday: 'long',
    };

  return today.toLocaleDateString('en-US', options);

}
