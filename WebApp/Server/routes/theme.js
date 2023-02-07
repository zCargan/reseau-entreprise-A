"use strict"

const router = require("express").Router()
const themesCtrl = require("../controllers/themes")

router.get("/", themesCtrl.getAllTheme)
router.post("/", themesCtrl.createTheme)

module.exports = router
