const DataBaseManager = require("../../../core/database/DataBaseManager");

class ItemReader {
  static async getAllItems(id) {
    const query = `
      SELECT id, title
      FROM poll.poll_item
      WHERE poll_id = ${id};
    `;
    const result = await DataBaseManager.query(query);
    return result[0];
  }

  static async getItemsById(id) {
    const query = `
      SELECT title
      FROM poll.poll_item
      WHERE id = ${id};
    `;
    const result = await DataBaseManager.query(query);
    return result[0];
  }
}

module.exports = ItemReader;
