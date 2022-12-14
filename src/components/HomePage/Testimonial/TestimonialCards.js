import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import data from "./data.js";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = data.map((t, i) => {
  return (
    <>
      <div
        key={i}
        style={{
          height: "140px",
          background: "red",
          margin: "5px",
          borderRadius: "12px",
          padding: "8px",
        }}
      >
        {t.message}
      </div>
    </>
  );
});
const TestimonialCards = () => (
  <AliceCarousel
    mouseTracking
    responsive={responsive}
    controlsStrategy="alternate"
    // autoPlay={true}
    // infinite={true}
    // autoPlayInterval={1000}
  >
    {items}
  </AliceCarousel>
);
export default TestimonialCards;
