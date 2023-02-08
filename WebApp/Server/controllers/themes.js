"use strict"

const { Theme } = require("../models")

module.exports = {
  async getAllTheme(req, res) {
    try {
      const theme = await Theme.findAll()
      res.send(theme)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the users"
      })
    }
  },

  async createTheme(req, res) {
    try {
      // check if libelle is not null
      if (!req.body.libelle) {
        return res.status(400).send({
          error: "libelle is required"
        })
      }

      // check if libelle already exists
      const libelleExists = await Theme.findOne({
        where: {
          libelle: req.body.libelle
        }
      })
      if (libelleExists) {
        return res.status(403).send({
          error: "The libelle already exists"
        })
      }

      const theme = await Theme.create(req.body)
      res.send(theme)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create the theme"
      })
    }
  }
}
