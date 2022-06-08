const TableModel = require('../models/table-model');

class TableService {
  async createSection(body) {
    try {
      let table = await TableModel.find();
      await TableModel.create({ ...body, section: table.length, rows: [] });
      return { status: 200 };
    } catch (e) {
      console.log('!!!createSection!!!', e);
      return { status: 500 }
    }
  }

  async createElement(body) {
    try {
      const { sectionId, _id, title, password } = body;
      let table = await TableModel.findById(sectionId);
      table.rows.push({ _id, title, password });
      await table.save();

      return { status: 200 };
    } catch (e) {
      console.log('!!!createTask!!!', e);
      return { status: 500 };
    }
  }

  async updateElement(body) {
    try {
      const { oldSectionId, newSectionId, _id, title, password } = body;
      const oldSection = await TableModel.findById(oldSectionId);
      if (newSectionId) {
        const newSection = await TableModel.findById(newSectionId);
        oldSection.rows = oldSection.rows.filter(el => el._id !== _id);
        newSection.rows.push({ _id, title, password });
        await newSection.save();
      } else {
        const index = oldSection.rows.map(el => el._id === _id).indexOf(true);
        if (index !== - 1) {
          oldSection.rows[index] = { _id, title, password };
        } else {
          return { status: 404 };
        }
      }

      await oldSection.save();

      return { status: 200 };
    } catch (e) {
      console.log(e);
      return { status: 500 };
    }
  }

  async deleteElement(body) {
    try {
      const { sectionId, _id } = body;
      console.log(sectionId, _id);
      let section = await TableModel.findById(sectionId);
      section.rows = section.rows.filter(el => el._id !== _id);
      await section.save();

      return { status: 200 };
    } catch (e) {
      console.log(e, '!!!deleteElement!!!');
      return { status: 500 };
    }
  }

  async getTable() {
    try {
      let table = await TableModel.find();
      return { status: 200, table };
    } catch (e) {
      console.log(e, '!!!getTable!!!');
      return { status: 500 };
    }
  }
}

module.exports = new TableService();
