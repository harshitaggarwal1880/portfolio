const catchAsyncError = require("../middleware/catchAsyncError");
const Blog = require("../models/blogModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require("../utils/errorhandler");

module.exports.createBlog = catchAsyncError(async (req, res, next) => {
  const blog = await Blog.create(req.body);

  res.status(200).json({ success: true, blog });
});

module.exports.getAllBlogs = catchAsyncError(async (req, res, next) => {

  const apiFeature = new ApiFeatures(Blog.find(), req.query).search();
  const blogs = await apiFeature.query;

  res.status(200).send({ status: true, blogs });
});


module.exports.getBlogDetails = catchAsyncError(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler("Blog Not Found", 404));
  }

  res.status(200).send({ status: true, blog });
});


module.exports.updateBlog = catchAsyncError(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler("Blogs Not Found", 404));
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
    useFindAndModify: false,
  });

  res.status(200).send({ status: true, blog });
});


module.exports.deleteBlog = catchAsyncError(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler("Blogs Not Found", 404));
  }

  await Blog.deleteOne({ _id: req.params.id });

  res
    .status(200)
    .send({ status: true, message: "Blog Deleted Successfully" });
});
