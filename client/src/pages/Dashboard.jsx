import Education from "./form/Education";
import Person from "./form/Person";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      <div className=" ">
        <Carousel>
          <Person />
          <Education />
        </Carousel>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <p>Current Index: {currentIndex}</p>
      </div>
      <div className="flex overflow-auto h-[600px] ">
        <div className="m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white p-8 shadow-lg "></div>
      </div>
    </div>
  );
};

export default Dashboard;
