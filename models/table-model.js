const { Schema, model } = require('mongoose');

module.exports = model('table', new Schema({
  _id: { type: String, required: true, unique: true },
  section: { type: Number, required: true },
  title: { type: String, required: true },
  rows: [
    {
      _id: { type: String, required: true },
      title: { type: String, required: true },
      password: { type: String, required: true },
    }
  ]
}));
