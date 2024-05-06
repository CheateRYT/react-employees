const jwt = require("jsonwebtoken");
const { prisma } = require("@prisma/client");

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        id: decodedToken.id,
      },
    });
    req.user = user;
  } catch (error) {
    res.status(401).json({ message: "Не авторизован" });
  }
};

module.exports = {
  auth,
};
