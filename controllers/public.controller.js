const publicSerivce = require("../services/public.service");

//GET /general/vehicle
// Return all the vehicles including the association model: driver.
class PublicController {
  async book(req, res) {
    const { status, data, message } = await publicSerivce.book();
    res.status(status);
    res.json({ message, data });
  }
}

module.exports = PublicController;
