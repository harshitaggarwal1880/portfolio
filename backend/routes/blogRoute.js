const express = require("express");
const { getAllBlogs, createBlog, updateBlog, deleteBlog, getBlogDetails } = require("../controllers/blogController");
const route = express.Router();


route.get("/blogs", getAllBlogs);

route.post("/create", createBlog);

route.put("/update/:id", updateBlog);

route.delete("/delete/:id", deleteBlog);

route.get("/blog/:id", getBlogDetails);

module.exports = route;