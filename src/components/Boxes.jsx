import React from "react";

//Images
import avatar5 from "../assets/images/avatar-5.jpg";
import avatar6 from "../assets/images/avatar-6.jpg";
import avatar7 from "../assets/images/avatar-7.jpg";
import avatar8 from "../assets/images/avatar-8.jpg";
import avatar9 from "../assets/images/avatar-9.jpg";
import avatar10 from "../assets/images/avatar-10.jpg";
import poster1 from "../assets/images/poster1.jpg";
import poster2 from "../assets/images/poster2.jpg";
import poster3 from "../assets/images/poster3.jpg";
import poster4 from "../assets/images/poster4.jpg";
import poster5 from "../assets/images/poster5.jpg";

const Boxes = () => {
  return (
    <>
      <section className="grid w-full">
        <div>
          <h2 className="text-slate-700 dark:text-slate-100">گروه ها</h2>
        </div>
        <div className="box-deck">
          <div className="grid gap-6 box border-primary-gray/10 p-6 bg-opacity-20 hover:bg-opacity-100 hover:scale-105 transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <img
                className="w-12 aspect-square rounded-2xl object-cover"
                src={poster1}
                alt="group=-photo"
              />
              <ul className="top-6 left-6 flex space-x-reverse -space-x-2 items-center">
                <li>
                  <img className="avatar w-6" src={avatar5} alt="avatar" />
                </li>
                <li>
                  <img className="avatar w-6" src={avatar6} alt="avatar" />
                </li>
                <li>
                  <img className="avatar w-6" src={avatar7} alt="avatar" />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-0 text-slate-700 dark:text-slate-100">
                گروه شماره 1
              </h3>
              <p className="text-primary-gray dark:text-gray-500 text-sm">
                متن آزمایشی و بی معنی
              </p>
            </div>
          </div>
          <div className="grid gap-6 box border-primary-gray/10 p-6 bg-opacity-20 hover:bg-opacity-100 hover:scale-105 transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <img
                className="w-12 aspect-square rounded-2xl object-cover"
                src={poster2}
                alt="group=-photo"
              />
              <ul className="top-6 left-6 flex space-x-reverse -space-x-2 items-center">
                <li>
                  <img className="avatar w-6" src={avatar8} alt="avatar" />
                </li>
                <li>
                  <img className="avatar w-6" src={avatar9} alt="avatar" />
                </li>
                <li>
                  <img className="avatar w-6" src={avatar10} alt="avatar" />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-0 text-slate-700 dark:text-slate-100">
                گروه شماره 1
              </h3>
              <p className="text-primary-gray dark:text-gray-500 text-sm">
                متن آزمایشی و بی معنی
              </p>
            </div>
          </div>
          <div className="grid gap-6 box border-primary-gray/10 p-6 bg-opacity-20 hover:bg-opacity-100 hover:scale-105 transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <img
                className="w-12 aspect-square rounded-2xl object-cover"
                src={poster3}
                alt="group=-photo"
              />
              <ul className="top-6 left-6 flex space-x-reverse -space-x-2 items-center">
                <li>
                  <img className="avatar w-6" src={avatar5} alt="avatar" />
                </li>
                <li>
                  <img className="avatar w-6" src={avatar6} alt="avatar" />
                </li>
                <li>
                  <img className="avatar w-6" src={avatar7} alt="avatar" />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-0 text-slate-700 dark:text-slate-100">
                گروه شماره 1
              </h3>
              <p className="text-primary-gray dark:text-gray-500 text-sm">
                متن آزمایشی و بی معنی
              </p>
            </div>
          </div>
          <div className="grid gap-6 box border-primary-gray/10 p-6 bg-opacity-20 hover:bg-opacity-100 hover:scale-105 transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <img
                className="w-12 aspect-square rounded-2xl object-cover"
                src={poster5}
                alt="group=-photo"
              />
              <ul className="top-6 left-6 flex space-x-reverse -space-x-2 items-center">
                <li>
                  <img className="avatar w-6" src={avatar8} alt="avatar" />
                </li>
                <li>
                  <img className="avatar w-6" src={avatar9} alt="avatar" />
                </li>
                <li>
                  <img className="avatar w-6" src={avatar10} alt="avatar" />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-0 text-slate-700 dark:text-slate-100">
                گروه شماره 1
              </h3>
              <p className="text-primary-gray dark:text-gray-500 text-sm">
                متن آزمایشی و بی معنی
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid w-full">
        <div>
          <h2 className="text-slate-700 dark:text-slate-100">
            به تماشا ادامه دهید
          </h2>
        </div>
        <div className="box-deck">
          <div className="box overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                className="object-cover aspect-video cursor-pointer transition-all duration-300 hover:scale-110"
                src={poster3}
                alt="poster"
              />
              <span className="absolute top-4 right-4 btn bg-white/5 backdrop-blur text-slate-50 px-3 py-1 text-sm">
                10px
              </span>
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary-red"></span>
            </div>
            <div className="p-6">
              <h3 className="text-lg mb-0 text-slate-700 dark:text-slate-100">
                چیز های عجیب
              </h3>
              <p className="text-primary-gray dark:text-gray-500 text-sm">
                متن آزمایشی و بی معنی
              </p>
            </div>
          </div>
          <div className="box overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                className="object-cover aspect-video cursor-pointer transition-all duration-300 hover:scale-110"
                src={poster2}
                alt="poster"
              />
              <span className="absolute top-4 right-4 btn bg-white/5 backdrop-blur text-slate-50 px-3 py-1 text-sm">
                10px
              </span>
              <span className="absolute bottom-0 left-0 w-3/4 h-1 bg-primary-red"></span>
            </div>
            <div className="p-6">
              <h3 className="text-lg mb-0 text-slate-700 dark:text-slate-100">
                کارآگاهان حقیقی
              </h3>
              <p className="text-primary-gray dark:text-gray-500 text-sm">
                متن آزمایشی و بی معنی
              </p>
            </div>
          </div>
          <div className="box overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                className="object-cover aspect-video cursor-pointer transition-all duration-300 hover:scale-110"
                src={poster1}
                alt="poster"
              />
              <span className="absolute top-4 right-4 btn bg-white/5 backdrop-blur text-slate-50 px-3 py-1 text-sm">
                10px
              </span>
              <span className="absolute bottom-0 left-0 w-1/5 h-1 bg-primary-red"></span>
            </div>
            <div className="p-6">
              <h3 className="text-lg mb-0 text-slate-700 dark:text-slate-100">
                دارک
              </h3>
              <p className="text-primary-gray dark:text-gray-500 text-sm">
                متن آزمایشی و بی معنی
              </p>
            </div>
          </div>
          <div className="box overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                className="object-cover aspect-video cursor-pointer transition-all duration-300 hover:scale-110"
                src={poster4}
                alt="poster"
              />
              <span className="absolute top-4 right-4 btn bg-white/5 backdrop-blur text-slate-50 px-3 py-1 text-sm">
                10px
              </span>
              <span className="absolute bottom-0 left-0 w-2/4 h-1 bg-primary-red"></span>
            </div>
            <div className="p-6">
              <h3 className="text-lg mb-0 text-slate-700 dark:text-slate-100">
                میان ستاره ای
              </h3>
              <p className="text-primary-gray dark:text-gray-500 text-sm">
                متن آزمایشی و بی معنی
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Boxes;
