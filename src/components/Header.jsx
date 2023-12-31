import React from "react";

//Images
import avatar from "../assets/images/avatar-12.jpg";

//Components
import DarkToggle from "./DarkToggle";

const Header = (props) => {
  const clickHandler = () => {
    props.func();
  };

  const $ = document.getElementsByTagName("html")[0];
  const toggleHandler = () => {
    $.classList.toggle("dark");
  };

  return (
    <header
      id="header"
      className="px-content xlg:mx-8 mx-4 flex items-center justify-between sticky top-0 z-40 bg-primary-bg dark:bg-primary-darker py-5"
    >
      <div className="flex items-center grow space-x-reverse space-x-4">
        <button onClick={clickHandler} className="xlg:hidden">
          <i className="fi fi-rr-symbol text-3xl"></i>
        </button>
        <div className="md:flex items-center space-x-reverse space-x-4 hidden">
          <a href="#" className="text-slate-700 inline-block">
            <i className="fi fi-rr-angle-right text-lg"></i>
          </a>
          <a href="#">
            <i className="fi fi-rr-angle-left text-lg"></i>
          </a>
        </div>
        <div className="border border-primary-gray dark:border-gray-500 rounded-full flex items-center w-10 h-10 sm:w-full sm:max-w-sm overflow-hidden px-3">
          <i className="fi fi-rr-search text-primary-gray dark:text-gray-500 text-base"></i>
          <input
            className="px-4 py-3 grow"
            type="text"
            placeholder="جست و جو..."
          />
          <i className="fi fi-rr-microphone text-base text-primary-gray dark:text-gray-500"></i>
        </div>
        <DarkToggle func={() => toggleHandler} />
      </div>
      <div className="flex items-center space-x-reverse space-x-3">
        <div className="flex items-center space-x-3 space-x-reverse">
          <a className="flex relative" href="#">
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
        </div>
        <div className="flex items-center space-x-reverse space-x-3">
          <div className="w-14 border-2 avatar  border-primary-red/80 p-[2px]">
            <img className="avatar" src={avatar} alt="profile" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h6 className="mb-1 text-sm">.Rosita b</h6>
            <span className="text-xs text-primary-gray">level 14</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
