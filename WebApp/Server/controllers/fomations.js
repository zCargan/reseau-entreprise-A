"use strict"

const { Formation, User, Theme } = require("../models")

module.exports = {
  async getAll(req, res) {
    try {
      const formation = await Formation.findAll()
      res.send(formation)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: "An error has occured trying to fetch the formations"
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

      // check if the all fields are not null
      if (!idUser || !idTheme || !description || !price) {
        return res.status(400).send({
          error: "All fields are required"
        })
      }

      // check if the user already exists
      const idUserExists = await User.findByPk(idUser)
      if (!idUserExists) {
        return res.status(403).send({
          error: "The user does not exist"
        })
      }

      // check if the theme already exists
      const themeIdExists = await Theme.findByPk(idTheme)
      if (!themeIdExists) {
        return res.status(403).send({
          error: "The theme does not exist"
        })
      }

      const formation = await Formation.create({
        idUser: parseInt(idUser),
        ThemeId: parseInt(idTheme),
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
