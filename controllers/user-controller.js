const UserService = require('../services/user-service');

class UserController {
  async getUsers(req, res) {
    try {
      const response = await UserService.getUsers();
      return res.send(response)
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async register(req, res) {
    try {
      const { body } = req;
      const { status } = await UserService.register(body);
      return res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async getUser(req, res) {
    try {
      const { body } = req;
      const response = await UserService.getUser(body);
      res.send(response);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

module.exports = new UserController();
