const { Schema, model } = require('mongoose');

module.exports = model('user', new Schema({
  _id: { type: String, required: true, unique: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));
