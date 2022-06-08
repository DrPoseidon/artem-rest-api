const UserModel = require('../models/user-model');

class UserService {
  async register(body) {
    try {
      await UserModel.create(body );
      return { status: 200 };
    } catch (e) {
      console.log('!!!register!!!', e);
      return { status: 500 }
    }
  }

  async getUsers() {
    try {
      let users = await UserModel.find();
      return { status: 200, users };
    } catch (e) {
      console.log(e, '!!!getUsers!!!');
      return { status: 500 };
    }
  }

  async getUser(body) {
    try {
      let user = await UserModel.findOne(body);
      return { status: 200, exists: !!user };
    } catch (e) {
      console.log(e, '!!!getUser!!!');
      return { status: 500 };
    }
  }
}

module.exports = new UserService();
