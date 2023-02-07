"use strict"

const { FormationFile } = require("../models")

module.exports = {
  async getFormationFileByFormationId(req, res) {
    const { id } = req.params
    const formationFile = await FormationFile.findAll({
      where: { formationId: id }
    })
    res.send(formationFile)
  },

  async create(req, res) {
    const { filename } = req.body
    const { id } = req.params
    const formationFile = await FormationFile.create({
      filename,
      formationId: id
    })
    res.send(formationFile)
  }
}
