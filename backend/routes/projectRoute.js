const express = require("express");
const { getAllProjects, createProject, updateProject, deleteProject, getProjectDetails } = require("../controllers/projectController");
const route = express.Router();


route.get("/projects", getAllProjects);

route.post("/create", createProject);

route.put("/update/:id", updateProject);

route.delete("/delete/:id", deleteProject);

route.get("/project/:id", getProjectDetails);

module.exports = route;