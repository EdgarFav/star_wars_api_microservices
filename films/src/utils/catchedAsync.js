module.exports = (fn) => {
  //Recibe una funcion controladora como parametro ya sea get characters o create characters
  return function (req, res, next) {
    // Retorna otra funcion controladora mejorada, que recibe req, res y next
    fn(req, res).catch((err) => {
      // Captura el error del controlador original que recibe req y res
      next(err); // Si hay siguiente middleware, lo pasa el cual es el manejador de errores de express
    });
  };
};

//Esta es una funcion de orden superior
