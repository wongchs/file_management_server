const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const upload = require("../middleware/upload");

router.get("/", fileController.getAllFiles);

router.post("/", upload.single("file"), fileController.uploadFile);

router.get("/:id", fileController.getFileById);

router.delete("/:id", fileController.deleteFile);

router.put("/:id/description", fileController.updateDescription);

module.exports = router;
