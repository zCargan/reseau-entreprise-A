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
      const { tag } = req.query
      const theme = await Theme.create({
        tag
      })
      res.send(theme)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create the user"
      })
    }
  }
}
