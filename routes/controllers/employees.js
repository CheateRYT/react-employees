const { prisma } = require("../../prisma/prisma-client");

/**
 * @route GET /api/employees
 * @desc Получение всех сотрудников
 * @access Private
 */
const getAllEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Не удалось получить сотрудников" });
  }
};
/**
 * @route POST /api/employees/add
 * @desc Добавление сотрудника
 * @access Private
 */
const addEmployee = async (req, res) => {
  try {
    const data = req.body;

    if (
      !data.firstName ||
      !data.lastName ||
      !data.address ||
      !data.age ||
      !data.Salary ||
      !data.Permission
    ) {
      return res.status(400).json({ message: "Все поля обязательные" });
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      message: `Произошла ошибка при обработке вашего запроса  + ${error}`,
    });
  }
};

module.exports = {
  getAllEmployees,
  addEmployee,
};
