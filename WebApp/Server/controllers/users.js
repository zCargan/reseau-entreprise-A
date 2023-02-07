"use strict"

const { User } = require("../models")

module.exports = {
  async getAllUser(req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the users"
      })
    }
  },

  async byId(req, res) {
    try {
      const user = await User.findByPk(req.params.id)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the users"
      })
    }
  },

  async post(req, res) {
    try {
      const { username, rule, firstName, lastName, email, password } = req.body
      const user = await User.create({
        username,
        rule,
        firstName,
        lastName,
        email,
        password
      })
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create the user"
      })
    }
  },

  async getAllTrainers(req, res) {
    try {
      const trainers = await User.findAll({
        where: {
          rule: "trainer"
        }
      })
      console.log(trainers)
      res.send(trainers)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the trainers"
      })
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: "The login information was incorrect"
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: "The login information was incorrect"
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to log in"
      })
    }
  }
}
