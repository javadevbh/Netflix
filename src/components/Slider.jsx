import React, { useState } from "react";

//Images
import slider1 from "../assets/images/sliderbg.jpg";
import poster3 from "../assets/images/poster3.jpg";
import poster2 from "../assets/images/poster2.jpg";
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
      src: poster2,
      title: "کارآگاهان حقیقی",
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
    <div className="p-8 grid">
      <section className="w-full h-[30rem] overflow-hidden rounded-3xl relative">
        <img
          className="w-full h-full transition-all object-cover object-center"
          src={slide.src}
          alt="Slider-background"
        />
        <div className="absolute flex flex-col justify-between top-0 w-full h-full shadow-y-sm p-8">
          <div className="flex space-x-3 space-x-reverse items-center text-slate-200">
            <p className="bg-black/30 py-2 px-4 rounded-full">10px / قسمت ها</p>
            <ul className="flex space-x-reverse -space-x-2 items-center">
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
            <p>+5 نفر از دوستان شما درحال تماشا هستن</p>
          </div>
          <div className="flex justify-between text-slate-100">
            <div className="flex flex-col space-y-reverse space-y-5">
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
                className={`w-28 h-16 rounded-xl cursor-pointer ${
                  imageSelected === "poster1" && "shadow-selected-md"
                }`}
                src={poster3}
                alt="poster1"
              />
              <img
                id="poster2"
                onClick={slideHandler}
                className={`w-28 h-16 rounded-xl cursor-pointer ${
                  imageSelected === "poster2" && "shadow-selected-md"
                }`}
                src={poster2}
                alt="poster2"
              />
              <img
                id="poster3"
                onClick={slideHandler}
                className={`w-28 h-16 rounded-xl cursor-pointer ${
                  imageSelected === "poster3" && "shadow-selected-md"
                }`}
                src={slider1}
                alt="poster3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
