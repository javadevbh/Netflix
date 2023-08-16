import React from "react";

//Images
import avatar1 from "../assets/images/avatar-1.jpg";
import avatar2 from "../assets/images/avatar-2.jpg";
import avatar3 from "../assets/images/avatar-3.jpg";
import avatar4 from "../assets/images/avatar-4.jpg";
import avatar5 from "../assets/images/avatar-5.jpg";
import avatar6 from "../assets/images/avatar-6.jpg";
import avatar7 from "../assets/images/avatar-7.jpg";

const LeftSidebar = () => {
  return (
    <div className="fixed hover:translate-x-0 transition-all duration-200 z-50 -translate-x-20 xl:translate-x-0 bg-white dark:bg-primary-darkness top-0 left-0 w-20 shadow-md h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-around h-4/5">
        <button className="btn btn-primary rounded-full w-10">
          <i className="fi fi-rr-plus"></i>
        </button>
        <div className="relative user-status status-online">
          <img className="avatar" src={avatar1} alt="avatar" />
        </div>
        <div className="relative user-status status-online">
          <img className="avatar" src={avatar2} alt="avatar" />
        </div>
        <div className="relative user-status status-offline">
          <img className="avatar" src={avatar3} alt="avatar" />
        </div>
        <div className="relative user-status status-offline">
          <img className="avatar" src={avatar4} alt="avatar" />
        </div>
        <div className="relative user-status status-offline">
          <img className="avatar" src={avatar5} alt="avatar" />
        </div>
        <div className="relative">
          <img className="avatar" src={avatar6} alt="avatar" />
        </div>
        <div className="relative">
          <img className="avatar" src={avatar7} alt="avatar" />
        </div>
        <div className="absolute xl:-right-4 -right-7 shadow-sm w-7 xl:w-4 flex justify-center items-center h-8 bg-white dark:bg-primary-darkness rounded-r-full cursor-pointer">
          <i className="fi fi-rr-angle-right xl:text-xs"></i>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
