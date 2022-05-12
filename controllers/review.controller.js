const reviewService = require("../services/review.service");

class ReviewController {
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
