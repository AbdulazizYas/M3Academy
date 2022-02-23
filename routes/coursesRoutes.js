const express = require("express");
const coursetController = require("../controllers/course");

const router = express.Router();

router.post("/create", coursetController.course_create);
router.get("/:id", coursetController.course_view);
router.delete("/:id", coursetController.course_delete);
router.put("/:id", coursetController.course_update);

module.exports = router;
