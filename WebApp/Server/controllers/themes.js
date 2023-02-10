"use strict"

const { theme } = require("../models")

module.exports = {
  async getAllTheme(req, res) {
    try {
      const themeReq = await theme.findAll()
      res.send(themeReq)
    } catch (err) {
      console.log(err)
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
      const libelleExists = await theme.findOne({
        where: {
          libelle: req.body.libelle
        }
      })
      if (libelleExists) {
        return res.status(403).send({
          error: "The libelle already exists"
        })
      }

      const themeReq = await theme.create(req.body)
      res.send(themeReq)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: "An error has occured trying to create the theme"
      })
    }
  }
}
