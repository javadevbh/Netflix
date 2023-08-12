import React from "react";

//Images
import avatar from "../assets/images/avatar-12.jpg"

const Header = () => {
  return (
    <header className="px-content m-8 flex items-center justify-between">
      <div className="flex items-center grow">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-slate-700 inline-block">
            <i className="fi fi-rr-angle-right text-lg"></i>
          </a>
          <a href="#">
            <i className="fi fi-rr-angle-left text-lg mr-4"></i>
          </a>
        </div>
        <div className="border border-primary-gray rounded-full flex items-center w-96 px-4">
          <i className="fi fi-rr-search text-primary-gray text-base"></i>
          <input
            className="px-4 py-3 grow"
            type="text"
            placeholder="جست و جو..."
          />
          <i className="fi fi-rr-microphone text-base text-primary-gray"></i>
        </div>
      </div>
      <div className="flex items-center">
        <a className="flex relative ml-6" href="#">
          <span class="flex h-3 w-3 absolute -top-1 -right-1">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-red opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-primary-red"></span>
          </span>
          <i className="fi fi-rr-comment"></i>
        </a>
        <a className="flex relative" href="#">
          <span class="flex h-3 w-3 absolute -top-1 -right-1">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-red opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-primary-red"></span>
          </span>
          <i className="fi fi-rr-bell"></i>
        </a>
        <div className="flex items-center mr-4">
          <div className="w-14 border-2 avatar  border-primary-red/80 p-[2px]">
            <img className="avatar" src={avatar} alt="profile" />
          </div>
          <div className="flex flex-col items-start justify-center mr-4">
            <h6 className="mb-1 text-sm">.Rosita b</h6>
            <span className="text-xs text-primary-gray">level 14</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
