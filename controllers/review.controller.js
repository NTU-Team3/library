const reviewService = require("../services/review.service");
const Review = require("../models/review");

class ReviewController {
  // Add review
  async addReview(req, res) {
    // req.body: is from express.
    const { ratings, comments } = req.body;

    if (typeof ratings !== "number" || typeof comments !== "string") {
      res.status(400);
      return res.send("Key in a proper feedback.");
    }

    const { status, data } = await reviewService.addReview();
    res.status(status);
    res.json({ data });
  }
    
  // This is a class, which has methods 'listReview'
  async listReview(req, res) {
    // const { reviewId, userId } = req.body;
    console.log("Review Controller");
    const { status, data, message } = await reviewService.listReview();
    res.status(status);
    res.json({ message, data });
  }
}

module.exports = ReviewController;
