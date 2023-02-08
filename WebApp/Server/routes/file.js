"use strict"

const router = require("express").Router()
const filesCtrl = require("../controllers/files")

const multer = require("../middlewares/authorizedFile")

router.get("/:id", filesCtrl.getFormationFileByFormationId)
router.post("/:id", multer, filesCtrl.create)

module.exports = router
