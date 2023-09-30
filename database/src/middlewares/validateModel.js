module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Planet", "Film"].includes(model)) {
    return next();
  } else {
    throw Error("Invalid Model");
  }
};
