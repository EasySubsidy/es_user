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
        width: "480px",
        height: "auto",
      }}
    >
      {/* 最初の要素はgoogle mapのみ */}
      {/* その他はimageとtext */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={2}
      >
        {children}
      </Swiper>
    </div>
  );
}
