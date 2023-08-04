import React, { useEffect, useRef, useState } from "react";
import Projectss from "../Images/projectss.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Mac from "./Mac";
import BlogCard from "./BlogCard";
import Iframe from "react-iframe";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import Loading from "./Loading";
import Footer from "./Footer";
import { GrSend } from "react-icons/gr";
import Comments from "./Comments";
import { useDispatch } from "react-redux";

import { HashScroll } from "react-hash-scroll";
import AllComments from "./AllComments";

const ProjectPage = () => {
  const [projects, setprojects] = useState([]);

  const [details, setdetails] = useState(null);

  const { id } = useParams();

  // const ref = useRef(null);

  // const ref = useAnimatedRef();
  const handleClick = () => {
    // ref.current.scrollTo({ x, y });
    // ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchprojects = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND}/api/p/projects`
    );

    console.log(data);

    setprojects(data.projects);
  };

  useEffect(() => {
    fetchprojects();
  }, []);

  const fetchprojectdetails = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND}/api/p/project/${id}`
    );

    console.log(data);

    setdetails(data.project);
  };

  useEffect(() => {
    fetchprojectdetails();
  }, [id]);

  return (
    <Mac>
      {details ? (
        <div className="h-[80vh] flex flex-col items-center gap-8 bg-white overflow-y-auto">
          <div className="flex flex-col items-center gap-12 p-8">
            <div>
              <h1 className="text-[4vw] font-bold text-center border-b-2 border-black p-2">
                {" "}
                {details?.title}
              </h1>
            </div>

            <div className="w-[80%] flex flex-col gap-8">
              <div>
                <img
                  src={details.topImage.url}
                  alt=""
                  className="border-2 border-black rounded-xl shadow-[0_0_10px_1px_#000] "
                />
              </div>
              <span dangerouslySetInnerHTML={{ __html: details.body }} />

              <Comments details={details} setdetails={setdetails} />
              <AllComments details={details} />
            </div>

            <div className="w-full h-1 border-[1px] border-black"></div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between py-4">
                <div className="text-[3vw]">Recommended Projects</div>
                <Link
                  to="/projects"
                  className="flex items-center font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  Show more
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 px-4">
                {projects.map((project, index) => {
                  return (
                    <a href={`/project/${id}`}>
                      <ProjectCard
                        title={project.title}
                        image={project.topImage.url}
                        id={project._id}
                        key={index}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full bg-[#121733] p-4 text-center text-white">
            <div>Leftyharsh Copyright © 2023 - All rights reserved</div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Mac>
  );
};

export default ProjectPage;
