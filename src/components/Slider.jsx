import React, { useState } from "react";

//Images
import slider1 from "../assets/images/sliderbg.jpg";
import poster3 from "../assets/images/poster3.jpg";
import poster4 from "../assets/images/poster4.jpg";
import avatar1 from "../assets/images/avatar-1.jpg";
import avatar2 from "../assets/images/avatar-2.jpg";
import avatar3 from "../assets/images/avatar-3.jpg";

const Slider = () => {
  const slides = {
    slide1: {
      src: slider1,
      title: "ویچر",
    },
    slide2: {
      src: poster3,
      title: "چیز های عجیب",
    },
    slide3: {
      src: poster4,
      title: "میان ستاره ای",
    },
  };

  const [slide, setSlide] = useState(slides.slide1);
  const [imageSelected, setImageSelected] = useState("poster3");

  const slideHandler = (e) => {
    const elementId = e.target.id;
    const imageElement = document.getElementById(`${elementId}`);
    setImageSelected(imageElement.id);

    switch (e.target.alt) {
      case "poster1":
        setSlide(slides.slide2);
        break;
      case "poster2":
        setSlide(slides.slide3);
        break;
      case "poster3":
        setSlide(slides.slide1);
        break;
    }
  };

  return (
      <section className="w-full h-[30rem] overflow-hidden rounded-3xl relative">
        <img
          className="w-full h-full transition-all object-cover object-left sm:object-center"
          src={slide.src}
          alt="Slider-background"
        />
        <div className="absolute flex flex-col justify-between top-0 w-full h-full bg-black/30 md:bg-transparent md:shadow-y-sm sm:p-8 p-6">
          <div className="grid gap-4 sm:gap-0 sm:flex sm:space-x-3 space-x-reverse justify-center sm:justify-start items-center text-slate-200">
            <p className="bg-black/30 py-2 px-4 rounded-full mx-auto sm:mx-3">10px / قسمت ها</p>
            <ul className="flex space-x-reverse -space-x-2 justify-center sm:justify-start items-center">
              <li>
                <img className="avatar w-8" src={avatar1} alt="avatar" />
              </li>
              <li>
                <img className="avatar w-8" src={avatar2} alt="avatar" />
              </li>
              <li>
                <img className="avatar w-8" src={avatar3} alt="avatar" />
              </li>
            </ul>
            <p className="truncate">+5 نفر از دوستان شما درحال تماشا هستن</p>
          </div>
          <div className=" grid gap-4 justify-center md:flex md:justify-between text-slate-100">
            <div className="flex items-center md:items-start flex-col space-y-reverse space-y-4">
              <h1>{slide.title}</h1>
              <p>متن آزمایشی و بی معنی</p>
              <div className="flex items-center space-x-reverse space-x-4">
                <button className="btn btn-primary btn-lg shadow-md shadow-primary-red/50">
                  تماشا
                </button>
                <button className="btn btn-blur btn-sm">
                  <i className="fi fi-rr-plus"></i>
                </button>
              </div>
            </div>
            <div className="flex items-end space-x-reverse space-x-4">
              <img
                id="poster1"
                onClick={slideHandler}
                className={`sm:w-28 w-24 aspect-video rounded-xl cursor-pointer ${
                  imageSelected === "poster1" && "shadow-selected-md"
                }`}
                src={poster3}
                alt="poster1"
              />
              <img
                id="poster2"
                onClick={slideHandler}
                className={`sm:w-28 w-24 aspect-video rounded-xl cursor-pointer ${
                  imageSelected === "poster2" && "shadow-selected-md"
                }`}
                src={poster4}
                alt="poster2"
              />
              <img
                id="poster3"
                onClick={slideHandler}
                className={`sm:w-28 w-24 aspect-video rounded-xl cursor-pointer ${
                  imageSelected === "poster3" && "shadow-selected-md"
                }`}
                src={slider1}
                alt="poster3"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Slider;
