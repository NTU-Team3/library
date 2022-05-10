const adminSerivce = require("../services/admin.service");

class AdminController {
  async setup(req, res) {
    console.log("Admin Controller");
    const { status, data, message } = await adminSerivce.setup();
    res.status(status);
    res.json({ message, data });
  }
  /**
   * Name: reset
   * Description: drop all tables
   * @param {*} req
   * @param {*} res
   */
  async reset(req, res) {
    const { status, data, message } = await adminSerivce.reset();
    res.status(status);
    res.json({ message, data });
  }
}

module.exports = AdminController;
