exports.healthController = (_req, res) => {
  res.json({
    message: "success",
  });
};

exports.adminInfoController = (_req, res) => {
  res.json({
    name: "rayhan",
    email: "rayhanmujudmar0177@gmail.com",
  });
};
