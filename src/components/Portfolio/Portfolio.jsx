import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import AdminDash from '../../img/AdminDash.png'
import Sportify from '../../img/Sportify.png'
import education from '../../img/education.png'
import Log from '../../img/Log.png'

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={AdminDash} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sportify} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={education} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Log} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
