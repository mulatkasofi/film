import React, { useEffect, useMemo, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/film/film.selector";
import { getFilmOne } from "../../api/filmOne";
import { resetFilm, resetPage, setFilmOne } from "../../store/film/film.reduser";
import FilmCardOneItem from "../FilmCardOneItem/FilmCardOneItem";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import shuffle from "lodash.shuffle";
import styles from './FilmCardOne.module.css'
import FilmCard from "../FilmCard/FilmCard";
import right from "../../img/Vector 1 (Stroke) — копия.png";
import left from "../../img/Vector 1 (Stroke).png";

const FilmCardOne: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cardOne,mainFilms } = useSelector(getSlice);

  useDidUpdate(() => {
    if (!id) return () => {};

    getFilmOne(id).then((book) => {
      dispatch(setFilmOne(book));
    });
 return () => dispatch(resetFilm());
  }, [id,dispatch]);

const randomArticles = useMemo(
  () => shuffle(mainFilms).slice(0, 10),
  [mainFilms, id]
);

const [[start, end], setSlide] = useState([0, 4]);

const handleNext = () => {
  if (end === 10) return;
  const nextStart = start + 1;
  const nextEnd = end + 1;
  setSlide([nextStart, nextEnd]);
};
const handlePrev = () => {
  if (start === 0) return;
  const nextStart = start - 1;
  const nextEnd = end - 1;
  setSlide([nextStart, nextEnd]);
};

  return (
    <>
      <div>
        {cardOne && <FilmCardOneItem cardOne={cardOne} key={cardOne.imdbID} />}
        <div className={styles.recom}>
          <p className={styles.rec}>Recommendations</p>
          <div>
            <button className={styles.bt} onClick={handlePrev}>
              {" "}
              <img src={left} alt="" />
            </button>
            <button className={styles.bt} onClick={handleNext}>
              {" "}
              <img src={right} alt="" />
            </button>
          </div>
        </div>
        <div className={styles.main}>
          {randomArticles.slice(start, end).map((film) => (
            <FilmCard
              film={film}
              link={`/filmCardOne/${film.imdbID}`}
              key={film.imdbID}
            ></FilmCard>
          ))}
        </div>
      </div>
    </>
  );
};
export default FilmCardOne




