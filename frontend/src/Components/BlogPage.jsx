import React, { useEffect, useState } from "react";
import Projectss from "../Images/projectss.png";
import { Link, useParams } from "react-router-dom";
import Mac from "./Mac";
import BlogCard from "./BlogCard";
import Iframe from "react-iframe";
import axios from "axios";
import Loading from "./Loading";
import { GrSend } from "react-icons/gr";

const BlogPage = () => {
  const { id } = useParams();

  const [blogs, setblogs] = useState([]);

  const fetchblogs = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND}/api/b/blogs`);

    console.log(data);

    setblogs(data.blogs);
  };

  useEffect(() => {
    fetchblogs();
  }, []);

  const [details, setdetails] = useState(null);

  const fetchblogdetails = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND}/api/b/blog/${id}`);

    console.log(data);

    setdetails(data.blog);
  };

  useEffect(() => {
    fetchblogdetails();
  }, []);

  return (
    <Mac>
      {details ? (

        <div className="h-[80vh] flex flex-col items-center gap-8 bg-white overflow-y-auto">
          <div className="flex flex-col items-center gap-12 p-8">
            <div>
              <h1 className="text-[4vw] font-bold text-center">
                {" "}
                {details?.title}
              </h1>
            </div>

            <div>
              <img src={details.topImage.url} alt="" className="border-2 border-black rounded-xl shadow-[0_0_10px_1px_#000]"/>
            </div>

            <div className="w-[80%] flex flex-col gap-8">
              <span dangerouslySetInnerHTML={{ __html: details.body }} />

              <div className="flex flex-col items-center gap-2">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="message sonething..."
                  className="w-full border-black border-2 rounded-md shadow-[3px_3px_#000] p-2  text-black"
                ></textarea>

                <div className="w-full flex justify-end">
                  <button className="flex items-center gap-2 font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] ">
                    Send
                    <GrSend/>
                  </button>
                </div>

                <div></div>
              </div>
            </div>

            <div className="w-full h-1 border-[1px] border-black"></div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between py-4">
                <div className="text-[3vw]">Recommended Blogs</div>
                <Link to="/blogs" className="flex items-center font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]">
                  Show more
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 ">
                {blogs.map((blog, index) => {
                  return (
                    <BlogCard
                      title={blog.title}
                      desc={blog.description}
                      image={blog.topImage.url}
                      date={blog.createdAt}
                      id={blog._id}
                      key={index}
                    />
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
      {/* <Iframe url="https://www.sdrive.app/embed/1ptBQD"
        width="100%"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/> */}
    </Mac>
  );
};

export default BlogPage;
