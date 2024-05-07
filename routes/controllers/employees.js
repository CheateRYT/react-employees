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

/**
 * @route POST /api/employees/remove:id
 * @desc Удаление сотрудника
 * @access Private
 */
const removeEmployee = async (req, res) => {
  const { id } = req.body;

  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    res.status(204).json("OK");
  } catch {
    res.status(500).json({ message: "Не удалось удалить сотрудника" });
  }
};
/**
 * @route POST /api/employees/edit:id
 * @desc Редактирование сотрудника
 * @access Private
 */
const editEmployee = async (req, res) => {
  const data = req.body;
  const id = data.id;

  try {
    await prisma.employee.update({
      where: {
        id,
      },
      data,
    });

    res.status(204).json("OK");
  } catch (err) {
    res.status(500).json({ message: "Не удалось редактировать сотрудника" });
  }
};
/**
 * @route POST /api/employees/:id
 * @desc Редактирование сотрудника
 * @access Private
 */
const getSingleEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.findUnique({ where: { id } });
    res.status(200).json(employee);
  } catch {
    res.status(500).json({
      message: `Произошла ошибка при обработке вашего запроса  + ${error}`,
    });
  }
};
module.exports = {
  getAllEmployees,
  addEmployee,
  removeEmployee,
  editEmployee,
  getSingleEmployee,
};
