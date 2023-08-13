import React from "react";

//Components
import Slider from "./Slider";
import Boxes from "./Boxes";

const MainContent = () => {
  return (
    <main className="px-content w-full grid">
      <div className="p-8 grid gap-14">
        <Slider />
        <Boxes/>
      </div>
    </main>
  );
};

export default MainContent;
