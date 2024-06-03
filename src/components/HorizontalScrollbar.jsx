import React from "react";
import { Box } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HorizontalScrollbar.css";

// import required modules
import {  Navigation } from "swiper/modules";


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,

          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[ Navigation]}
        className="mySwiper"

      >
         {data.map((item) => (
      <SwiperSlide key={item.id || item}>
        <Box itemID={item.id || item} title={item.id || item} sx={{width:"100%" ,marginRight:"0"}} >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      </SwiperSlide>
    ))}
      </Swiper>
    </>
  );
};
export default HorizontalScrollbar;
