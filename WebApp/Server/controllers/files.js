"use strict"

const { FormationFile, Formation } = require("../models")

module.exports = {
  async getFormationFileByFormationId(req, res) {
    const { id } = req.params
    const formationFile = await FormationFile.findAll({
      where: { formationId: id }
    })
    res.send(formationFile)
  },

  async create(req, res) {
    const { filename } = req.file
    const { id } = req.params

    // check if filename and id are not empty
    if (!filename || !id) {
      return res.status(400).send({
        message: "filename or id is empty"
      })
    }

    // check if formation exists
    const existingFormation = await Formation.findByPk(id)
    if (!existingFormation) {
      return res.status(400).send({
        message: "formation does not exist"
      })
    }

    try {
      const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${filename}`

      res.status(200).json({ fileUrl })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error })
    }
  }
}
