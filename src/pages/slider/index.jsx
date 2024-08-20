import React, { useEffect, useState } from "react";
import { SliderData } from "../../utils/sliderData/data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./slider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
    const interval = setTimeout(nextSlide, 5000);
    return () => clearTimeout(interval);
  }, [current, length]);
  const prevSlider = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlider} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="BOOK" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default ImageSlider;
