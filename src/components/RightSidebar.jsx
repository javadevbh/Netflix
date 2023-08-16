import React from "react";

const RightSidebar = (props) => {
  const clickHandler = () => {
    props.func();
  };

  return (
    <div
      id="rightSidebar"
      className={`fixed z-50 ${
        props.status === true ? "translate-x-0" : "translate-x-full"
      }  xlg:translate-x-0 transition-all duration-200 bg-white dark:bg-primary-darker xlg:bg-transparent right-0 top-0 h-screen w-full xl:max-w-xxs max-w-xxs xlg:max-w-2xxs border-l-2 border-primary-light dark:border-slate-100/5 p-8 flex flex-col justify-between `}
    >
      <div>
        <div className="flex items-start justify-between">
          <h1 className='text-3xl after:content-["."] after:text-primary-red after:mr-1'>
            نتفلیکس
          </h1>
          <button onClick={clickHandler} className="xlg:hidden">
            <i className="fi fi-rr-cross-small text-3xl"></i>
          </button>
        </div>
        <nav className="grid 2xl:gap-8 gap-6 2xl:mt-8 mt-4 ">
          <div className="grid gap-4 2xl:gap-6">
            <h6 className="text-primary-gray dark:text-gray-700 text-sm mb-0">
              منو
            </h6>
            <ul className="grid gap-4 2xl:gap-6">
              <li className="flex active-link">
                <a className="flex py-1.5" href="#">
                  <i className="fi fi-rr-navigation"></i>
                  <span className="mr-2">جست و جو</span>
                </a>
              </li>
              <li>
                <a className="flex" href="#">
                  <i className="fi fi-rr-heart"></i>
                  <span className="mr-2">لیست تماشا</span>
                </a>
              </li>
              <li>
                <a className="flex" href="#">
                  <i className="fi fi-rr-calendar"></i>
                  <span className="mr-2">بزودی</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="grid gap-4 2xl:gap-6">
            <h6 className="text-primary-gray dark:text-gray-700 text-sm mb-0">
              اجتماعی
            </h6>
            <ul className="grid gap-4 2xl:gap-6">
              <li>
                <a className="flex" href="#">
                  <i className="fi fi-rr-user"></i>
                  <span className="mr-2">دوستان</span>
                </a>
              </li>
              <li>
                <a className="flex" href="#">
                  <i className="fi fi-rr-people"></i>
                  <span className="mr-2">گروه ها</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="grid gap-4 2xl:gap-6">
            <h6 className="text-primary-gray dark:text-gray-700 text-sm mb-0">
              عمومی
            </h6>
            <ul className="grid gap-4 2xl:gap-6">
              <li>
                <a className="flex" href="#">
                  <i className="fi fi-rr-settings"></i>
                  <span className="mr-2">تنظیمات</span>
                </a>
              </li>
              <li>
                <a className="flex" href="#">
                  <i className="fi fi-rr-exit"></i>
                  <span className="mr-2">خروج</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="w-full bg-primary-gray/25 dark:bg-primary-darkness text-center 2xl:p-6 p-4 rounded-xl">
        <h6 className="text-base mb-1.5">لورم اپیسوم</h6>
        <p className="text-xs text-primary-gray dark:text-gray-500 mb-4">
          متن آزمایشی و بی معنی
        </p>
        <button className="2xl:btn 2xl:text-base btn-sm btn-gray dark:btn-dark">
          مشاهده چالش ها
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
