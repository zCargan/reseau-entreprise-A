"use strict"

const { user } = require("../models")

module.exports = {
  async getAllUser(req, res) {
    try {
      const usersReq = await user.findAll()
      res.send(usersReq)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: "An error has occured trying to fetch the users"
      })
    }
  },

  async byId(req, res) {
    try {
      const userReq = await user.findByPk(req.params.id)
      res.send(userReq)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to fetch the users"
      })
    }
  },

  async post(req, res) {
    try {
      const { username, rule, firstName, lastName, email, password, avatar } =
        req.body

      // check if the username already exists
      const usernameExists = await user.findOne({
        where: {
          username: username
        }
      })
      if (usernameExists) {
        return res.status(403).send({
          error: "The username already exists"
        })
      }

      // check if the email already exists
      const emailExists = await user.findOne({
        where: {
          email: email
        }
      })
      if (emailExists) {
        return res.status(403).send({
          error: "The email already exists"
        })
      }

      const userReq = await user.create({
        username,
        rule,
        firstName,
        lastName,
        email,
        password,
        avatar
      })
      res.send(userReq)
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to create the user"
      })
    }
  },

  async getAllTrainers(req, res) {
    try {
      const trainers = await user.findAll({
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
      const userReq = await user.findOne({
        where: {
          email: email
        }
      })
      if (!userReq) {
        console.log(userReq)
        return res.status(403).send({
          error: "The login information was incorrect"
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        console.log(isPasswordValid)
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
