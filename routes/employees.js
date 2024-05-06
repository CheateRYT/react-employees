const express = require("express");
const router = express.Router();
const { auth } = require("./middleware/auth");
const { getAllEmployees, addEmployee } = require("./controllers/employees");

// /api/employees
router.get("/", auth, getAllEmployees);
// /api/employees/:id
router.get("/:id", auth, () => {
  console.log("get employee");
});
// /api/employees/add
router.post("/add", auth, addEmployee);
// /api/employees/remove:id
router.post("/remove:id", auth, () => {
  console.log("remove employee");
});
// /api/employees/remove:id
router.put("/edit:id", auth, () => {
  console.log("Edit employee");
});
module.exports = router;
