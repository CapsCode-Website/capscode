import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1.3 },
  568: { items: 2.3 },
  1024: { items: 3.3 },
};

const SliderCards = ({ data }) => (
  <AliceCarousel
    // duration={400}
    // autoPlay={true}
    startIndex={1}
    fadeOutAnimation={true}
    mouseDragEnabled={true}
    // playButtonEnabled={true}
    responsive={responsive}
    // autoPlayInterval={2000}
    autoPlayDirection="rtl"
    autoPlayActionDisabled={true}
  >
    {data.map((t, i) => {
      return (
        <div
          style={{
            height: "25vh",
            margin: "5px",
            borderRadius: "12px",
            padding: "1px 8px 8px 8px",
            background: t?.color,
          }}
          key={i}
        >
          <h3>{t.heading}</h3>
          <p style={{ color: "grey" }}>{t.desc}</p>
        </div>
      );
    })}
  </AliceCarousel>
);
export default SliderCards;
