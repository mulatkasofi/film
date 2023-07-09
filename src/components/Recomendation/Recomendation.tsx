import React from "react";
import { useSelector } from "react-redux";
import { useSnapCarousel } from "react-snap-carousel";
import { getSlice } from "../../store/film/film.selector";

const BasicCarousel = () => {
  const {mainFilms}=useSelector(getSlice)
  const { scrollRef } = useSnapCarousel();
  return (
    <ul
      ref={scrollRef}
      style={{
        display: "flex",
        overflow: "auto",
        scrollSnapType: "x mandatory",
      }}
    >
      {mainFilms.map((_, i) => (
        <li
          style={{
            backgroundColor: "aqua",
            fontSize: "50px",
            width: "250px",
            height: "250px",
            flexShrink: 0,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Item {i}
        </li>
      ))}
    </ul>
  );
};

export default BasicCarousel;
