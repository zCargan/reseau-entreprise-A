"use strict"

const { formation, user, theme } = require("../models")

module.exports = {
  async getAll(req, res) {
    try {
      const formationReq = await formation.findAll()
      res.send(formationReq)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: "An error has occured trying to fetch the formations"
      })
    }
  },

  async byId(req, res) {
    try {
      const formationReq = await formation.findByPk(req.params.id)
      res.send(formationReq)
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
      const idUserExists = await user.findByPk(idUser)
      if (!idUserExists) {
        return res.status(403).send({
          error: "The user does not exist"
        })
      }

      // check if the theme already exists
      const themeIdExists = await theme.findByPk(idTheme)
      if (!themeIdExists) {
        return res.status(403).send({
          error: "The theme does not exist"
        })
      }

      const formationReq = await formation.create({
        idUser: parseInt(idUser),
        ThemeId: parseInt(idTheme),
        description,
        price
      })
      res.send(formationReq)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create the formation"
      })
    }
  }
}
