const TableService = require('../services/table-service');

class TableController {
  async createSection(req, res) {
    try {
      const { body } = req;
      const { status } = await TableService.createSection(body);
      return res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async createElement(req, res) {
    try {
      const { body } = req;
      const { status } = await TableService.createElement(body);
      res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async deleteElement(req, res) {
    try {
      const { sectionId, _id } = req.query;
      const { status } = await TableService.deleteElement({ sectionId, _id });
      res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async updateElement(req, res) {
    try {
      const { body } = req;
      const { status } = await TableService.updateElement(body);
      res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async getTable(req, res) {
    try {
      const response = await TableService.getTable();
      return res.send(response)
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

module.exports = new TableController();
