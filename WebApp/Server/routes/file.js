"use strict"

const router = require("express").Router()
const filesCtrl = require("../controllers/files")

router.get("/:id", filesCtrl.getFormationFileByFormationId)
router.post("/:id", filesCtrl.create)

module.exports = router
