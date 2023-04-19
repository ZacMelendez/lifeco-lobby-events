import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import "./Images.scss";

const images = [
  "https://uploads-ssl.webflow.com/60a408cc465f1e0076bdc055/63b48e27d2fd4afd2fc16c27_IMG_2914.JPG",
  "https://uploads-ssl.webflow.com/60a408cc465f1e0076bdc055/639a020b108b3dc20e46a3ee_64389E08-D782-43C3-A217-245D0D74BD1F.JPG",
  "https://uploads-ssl.webflow.com/60a408cc465f1e0076bdc055/6399ff96371f620b5b862da8_AI8I9008-2.jpg",
];

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        speed={700}
        autoplay
        autoplayDelay={3000}
        easing="ease-in-out"
        backwardBtnProps={{ show: false }}
        forwardBtnProps={{ show: false }}
      >
        {images.map((url, i) => (
          <img key={i} src={url} />
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;
