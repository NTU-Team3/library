const reviewService = require("../services/review.service");

class ReviewController {
  // This is a class, which has methods 'listHistory'

  async listReview(req, res) {
    const reviewId = req.params.reviewId;

    if (isNaN(Number(reviewId))) {
      // res.status (xxx) is actually calling a function
      res.status(400);
      return res.send(`reviewId need to be integers.`);
    }

    // Destructuring the below to status, data, message
    const { status, data, message } = await reviewService.listReview(reviewId);

    res.status(status);

    res.json({ message, data });
  }
}

module.exports = ReviewController;