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
    <div className="fixed top-0 left-0 w-20 shadow-md h-screen flex items-center justify-center">
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
        <div className="absolute -right-4 shadow-sm w-4 flex justify-center items-center h-8 bg-white rounded-r-full cursor-pointer">
          <i className="fi fi-rr-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
