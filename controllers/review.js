const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.postReview = async (req, res) => {

    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview._id);

    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created!");
    console.log("Listing updated with new review:");
   
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;
    id = id.trim();
    reviewId = reviewId.trim();
    
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
};