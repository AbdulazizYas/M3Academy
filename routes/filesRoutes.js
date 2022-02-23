const express = require("express");
const filetController = require("../controllers/file");

const router = express.Router();

router.post("/create", filetController.file_create);
router.get("/:id", filetController.file_view);
router.delete("/:id", filetController.file_delete);
router.put("/:id", filetController.file_update);

module.exports = router;
