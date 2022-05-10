const express = require("express");

// Import
const AdminController = require("../controllers/admin.controller");
// Instantiate the class
const adminController = new AdminController();

const router = express.Router();

router.get("/admin", (req, res) => {
  return res.send("You have called a admin route");
});

/* ======================================================
*  Endpoint: Get || setup the database; create all tables with *  records
 ========================================================*/

router.get("/admin/setup", adminController.setup);

/** ======================================================
 *  Endpoint: Get || drop all tables
 *  ====================================================== */

router.get("/admin/reset", adminController.reset);

module.exports = router;
