import React, { useState } from "react";

const AllComments = ({details}) => {

    const [showall, setshowall] = useState(false);

    const timeFormat = (date) => {
        const now = new Date();
        const pastdate = new Date(date);
        const diff = now - pastdate;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
    
        if (years > 0) {
          return `${years} years ago`;
        } else if (months > 0) {
          return `${months} months ago`;
        } else if (days > 0) {
          return `${days} days ago`;
        } else if (hours > 0) {
          return `${hours} hours ago`;
        } else if (minutes > 0) {
          return `${minutes} minutes ago`;
        } else {
          return "just now";
        }
      };
    
      const generateColor = () => {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        return color;
      };
    

  return (
    <>
      <div className="flex flex-col gap-4">
        {details.comments
          .slice(0, showall ? details.comments.length : 3)
          .map((commenta, index) => {
            return (
              <div className="flex gap-2 p-2 rounded-lg">
                <div
                  className="p-2 rounded-full h-10 w-10 flex justify-center items-center border-2 border-black "
                  style={{
                    backgroundColor: "#" + generateColor(),
                  }}
                >
                  {commenta.name.substring(0, 1)}
                </div>

                <div>
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-lg">{commenta.name}</div>
                    <div className="text-sm">
                      {timeFormat(commenta.createdAt)}
                    </div>
                  </div>

                  <div className="py-1">{commenta.comment}</div>
                </div>
              </div>
            );
          })}
      </div>

      {details.comments.length > 3 && (
        <div className="pl-4">
          {showall ? (
            <button
              onClick={() => setshowall(false)}
              className="flex items-center w-fit gap-2 font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] 0"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setshowall(true)}
              className="flex items-center w-fit gap-2 font-bold px-3 py-1 bg-white border-black border-2 rounded-[0.5rem] shadow-[3px_3px_#000000] hover:bg-slate-400 active:shadow-[1px_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] 0"
            >
              Show All
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default AllComments;
