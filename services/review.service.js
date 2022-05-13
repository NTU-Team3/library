const Review = require("../models/review");
// const User = require("../models/user");
module.exports = {
  listReview: async () => {
    const result = {
      status: null,
      message: null,
      data: null,
    };

    const review = await Review.findAll({
        // include: [ User ],
        order: [["id", "ASC"]],
    }
    );

    // error handling
    if (!review) {
      result.status = 404;
      result.message = `Could not find the review with id ${reviewId}`;
      return result;
    }

    result.status = 200;
    result.message = "Added review successfully";
    result.data = review;

    return result;
  },
}
