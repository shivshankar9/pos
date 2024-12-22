"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Company {
  name: string;
  logoUrl: string;
}

const CompanySlider = ({ companies }: { companies: Company[] }) => {
  return (
    <Swiper spaceBetween={30} slidesPerView={3} loop>
      {companies.map((company) => (
        <SwiperSlide key={company.name}>
          <img
            src={company.logoUrl}
            alt={company.name}
            className="companyLogo"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CompanySlider;
