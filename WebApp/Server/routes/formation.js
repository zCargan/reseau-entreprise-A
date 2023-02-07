"use strict"

const router = require("express").Router()
const formationsCtrl = require("../controllers/fomations")

router.get("/:id", formationsCtrl.byId)
router.get("/", formationsCtrl.getAll)
router.post("/", formationsCtrl.create)

module.exports = router
