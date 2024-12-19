import React from "react";
import Slider from "react-slick";

interface PaymentMethod {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface MakePaymentsSliderProps {
  methods: PaymentMethod[];
}

const MakePaymentsSlider: React.FC<MakePaymentsSliderProps> = ({ methods }) => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 5000, // Autoplay speed in ms
  };

  return (
    <div className="payments-slider">
      <h2>Make Payments</h2>
      <Slider {...settings}>
        {methods.map((method) => (
          <div key={method.id} className="payment-slide">
            <div className="payment-content">
              <img
                src={method.icon}
                alt={method.title}
                className="payment-icon"
              />
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MakePaymentsSlider;
