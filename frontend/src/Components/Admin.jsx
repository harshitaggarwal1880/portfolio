import React, { useMemo, useRef, useState } from "react";
import axios from "axios";
import Mac from "../Components/Mac";
import AdminBlogs from "./AdminBlogs";
import AdminProjects from "./AdminProjects";

const Admin = () => {
  const [select, setselect] = useState(true);

  return (
    <Mac>
      <div className="flex flex-col gap-3 items-center p-2">
        <div>
          <button
            onClick={() => setselect(false)}
            className="font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]  "
          >
            Project
          </button>
          <button
            onClick={() => setselect(true)}
            className="font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px]  "
          >
            Blog
          </button>
        </div>
        {select ? <AdminBlogs /> : <AdminProjects />}
      </div>
    </Mac>
  );
};

export default Admin;
