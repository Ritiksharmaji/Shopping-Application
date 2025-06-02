import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";

function HomeSectionCarosel({data}) {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

//   const items = Array(15)
//     .fill(1)
//     .map((_, index) => <HomeSectionCard key={index} />);

const items = data.slice(0, 15).map((item, index) => (
    <HomeSectionCard key={index} item={item} />
  ));

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          infinite
          ref={carouselRef}
        />

        {/* Left Button */}
        <Button
          onClick={slidePrev}
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            left: "0.5rem",
            transform: "translateY(-50%)",
            bgcolor: "white",
            color: "black",
            zIndex: 10,
            minWidth: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
          aria-label="Previous"
        >
          <KeyboardArrowLeftIcon />
        </Button>

        {/* Right Button */}
        <Button
          onClick={slideNext}
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            right: "0.5rem",
            transform: "translateY(-50%)",
            bgcolor: "white",
            color: "black",
            zIndex: 10,
            minWidth: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
          aria-label="Next"
        >
          <KeyboardArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default HomeSectionCarosel;
