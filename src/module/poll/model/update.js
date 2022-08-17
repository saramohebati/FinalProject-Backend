const DataBaseManager = require("../../../core/database/databaseManager");

class PollUpdater {
  static async updatePoll(uuid, userData) {
    const update = [];
    Object.keys(userData).forEach((key) => {
      update.push(`${key} = '${userData[key]}'`);
    });
    const query = `
        UPDATE poll
        SET
          ${update.join(",")}
        WHERE id = ${uuid}
        `;
    const result = await DataBaseManager.query(query);
    return result;
  }
}

module.exports = PollUpdater;
