import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

type SwiperAreaProps = {
  children?: React.ReactNode;
};

export default function SwiperArea(props: SwiperAreaProps) {
  const { children } = props;
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
      }}
    >
      {/* 最初の要素はgoogle mapのみ */}
      {/* その他はimageとtext */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {children}
        {/* <SwiperSlide>
          <p
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Slide 1
          </p>
          Slide 1
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
