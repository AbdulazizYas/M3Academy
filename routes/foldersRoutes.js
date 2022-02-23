const express = require("express");
const foldertController = require("../controllers/folder");

const router = express.Router();

router.post("/create", foldertController.folder_create);
router.get("/:id", foldertController.folder_view);
router.delete("/:id", foldertController.folder_delete);
router.put("/:id", foldertController.folder_update);

module.exports = router;
