"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Ad {
  title: string;
  imageUrl: string;
}

const AdSlider = ({ ads }: { ads: Ad[] }) => {
  return (
    <Swiper spaceBetween={30} slidesPerView={1} loop>
      {ads.map((ad) => (
        <SwiperSlide key={ad.title}>
          <img src={ad.imageUrl} alt={ad.title} className="adImage" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdSlider;
