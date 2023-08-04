import React from "react";

const RightSidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-full max-w-xxs border-l-2 border-primary-light p-8 flex flex-col justify-between">
      <div>
        <div>
          <h1 className='text-3xl after:content-["."] after:text-primary-red after:mr-1'>
            نتفلیکس
          </h1>
        </div>
        <nav className="grid gap-8 mt-8 ">
          <div className="grid gap-4">
            <h6 className="text-primary-gray text-sm">منو</h6>
            <ul className="grid gap-6">
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
          <div className="grid gap-4">
            <h6 className="text-primary-gray text-sm">اجتماعی</h6>
            <ul className="grid gap-6">
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
          <div className="grid gap-4">
            <h6 className="text-primary-gray text-sm">عمومی</h6>
            <ul className="grid gap-6">
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
      <div className="w-full bg-primary-gray/25 text-center p-6 rounded-xl">
        <h6 className="text-base mb-1.5">لورم اپیسوم</h6>
        <p className="text-xs text-primary-gray mb-4">متن آزمایشی و بی معنی</p>
        <button className="btn btn-gray">مشاهده چالش ها</button>
      </div>
    </div>
  );
};

export default RightSidebar;
