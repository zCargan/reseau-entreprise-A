"use strict"

const router = require("express").Router()
const usersCtrl = require("../controllers/users")

router.post("/login", usersCtrl.login)
router.get("/trainers", usersCtrl.getAllTrainers)
router.get("/:id", usersCtrl.byId)
router.get("/", usersCtrl.getAllUser)
router.post("/", usersCtrl.post)

module.exports = router
