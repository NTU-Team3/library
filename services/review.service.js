const Review = require("../models/review");
module.exports = {
  listReview: async () => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    const review = await Review.findAll({
            order: [["userId", "ASC"]],
          });

    // error handling
    if (!review) {
      result.status = 404;
      result.message = `Could not find the review with id ${reviewId}`;
      return result;
    }

    result.status = 200;
    result.message = "Reviews are listed";
    result.data = review;

    return result;
  },
}
