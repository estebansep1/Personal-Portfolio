/* eslint-disable no-undef */
import React from "react";
import { Carousel } from "react-responsive-carousel";

const PictureSlider = React.memo(function Slider({ pictures }) {
  const imageElements = pictures.map((imagePath, index) => (
    <div key={index}>
      <img src={imagePath} alt={`Project IMG`} />
    </div>
  ));

  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      stopOnHover={true}
      autoPlay={true}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      swipeable={false}
      transitionTime={420}
      interval={Math.random() * (6000 - 5000) + 5000}
    >
      {imageElements}
    </Carousel>
  );
});
export default PictureSlider;
