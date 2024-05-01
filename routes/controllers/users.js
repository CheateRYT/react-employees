const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res
      .status(400)
      .json({ message: "Пожалуйста, заполните обязательные поля" });
  }
};
const register = async (req, res) => {
  res.send("register");
};

const current = async (req, res) => {
  res.send("current");
};

module.exports = {
  login,
  register,
  current,
};
