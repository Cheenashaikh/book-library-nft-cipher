import React from "react";
import { BrowserRouter } from "react-router-dom";
import ImageSlider from "../slider";
import { SliderData } from "../../utils/sliderData/data";
import FamousBook from "../popularBooks";
import { popularBook } from "../../utils/popular-books/data";
import AboutUsFooter from "../aboutUsFooter";
import { service } from "../../utils/servics/data";
import ContactUsFooter from "../contactUsFooter";

function HomeOne() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <FamousBook heading="POPULAR BOOKS" data={popularBook} />
      <FamousBook heading="SERVICS" data={service} />
      <AboutUsFooter />
      <ContactUsFooter />
    </div>
  );
}

export default HomeOne;
