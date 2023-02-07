"use strict"

const { Formation, User, Theme } = require("../models")

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

      // check if the user already exists
      const idUserExists = await User.findByPk(idUser)
      if (!idUserExists) {
        return res.status(403).send({
          error: "The user does not exist"
        })
      }

      // check if the theme already exists
      const idThemeExists = await Theme.findByPk(idTheme)
      if (!idThemeExists) {
        return res.status(403).send({
          error: "The theme does not exist"
        })
      }

      const formation = await Formation.create({
        idUser,
        idTheme,
        description,
        price
      })
      res.send(formation)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create the formation"
      })
    }
  }
}
