const express = require("express");
const deptController = require("../controllers/department");

const router = express.Router();

router.post("/create", deptController.dept_create);
router.get("/", deptController.all_depts);
router.delete("/:id", deptController.dept_delete);
router.put("/:id", deptController.dept_update);

module.exports = router;
