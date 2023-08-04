import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Skills from "./Components/Skills";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import SkillsPage from "./Pages/SkillsPage";
import Projects from "./Pages/Projects";
import BlogPage from "./Components/BlogPage";
import ProjectPage from "./Components/ProjectPage";
import Admin from "./Components/Admin";
import Test from "./Pages/Test";
import { setId, setName } from "./store/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const userstate = useSelector((state) => state.user);

  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));

    dispatch(setName(user.name));
    dispatch(setId(user.id));
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/skills" element={<SkillsPage />}></Route>
          <Route exact path="/blogs" element={<Blog />}></Route>
          <Route exact path="/blog/:id" element={<BlogPage />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/project/:id" element={<ProjectPage />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/test" element={<Test />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
