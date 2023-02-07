"use strict"

const { Formation } = require("../models")

module.exports = {
  async getAll(req, res) {
    try {
      const formation = await Formation.findAll()
      res.send(formation)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the users"
      })
    }
  },

  async byId(req, res) {
    try {
      const formation = await Formation.findByPk(req.params.id)
      res.send(formation)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the users"
      })
    }
  },

  async create(req, res) {
    try {
      const { idUser, idTheme, description, price } = req.body
      const formation = await Formation.create({
        idUser,
        idTheme,
        description,
        price
      })
      res.send(formation)
    } catch (err) {
      // res.status(500).send({
      //   error: "An error has occured trying to create the user"
      // })
      console.log(err)
    }
  }
}
