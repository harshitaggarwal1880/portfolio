const catchAsyncError = require("../middleware/catchAsyncError");
const Project = require("../models/projectModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require("../utils/errorhandler");

module.exports.createProject = catchAsyncError(async (req, res, next) => {
    
  const project = await Project.create(req.body);

  res.status(200).json({ success: true, project });
});

module.exports.getAllProjects = catchAsyncError(async (req, res, next) => {

  const apiFeature = new ApiFeatures(Project.find(), req.query).search();
  const projects = await apiFeature.query;

  res.status(200).send({ status: true, projects });
});


module.exports.getProjectDetails = catchAsyncError(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Project Not Found", 404));
  }

  res.status(200).send({ status: true, project });
});


module.exports.updateProject = catchAsyncError(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Projects Not Found", 404));
  }

  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
    useFindAndModify: false,
  });

  res.status(200).send({ status: true, project });
});


module.exports.deleteProject = catchAsyncError(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Projects Not Found", 404));
  }

  await Project.deleteOne({ _id: req.params.id });

  res
    .status(200)
    .send({ status: true, message: "Project Deleted Successfully" });
});
