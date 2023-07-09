import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilm } from "../../api/film";
import {
  decreaseOffset,
  increaseOffset,
  resetCard,
  resetPage,
  setFilms,
  setList,
  setListFilter,
} from "../../store/film/film.reduser";
import { getSlice } from "../../store/film/film.selector";
import FilmCard from "../FilmCard/FilmCard";
import styles from "./FilmList.module.css";
import Filter from "../Filter/Filter";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { getFilmSearch } from "../../api/searchFilm";
import { NavLink } from "react-router-dom";

const FilmList: React.FC = () => {
  const dispatch = useDispatch();
  const { card, page, search, mainFilms, year, filter,type } = useSelector(getSlice);

  const handleIncreace = () => {
    dispatch(increaseOffset());
  };

  const handleRes = () => {
    dispatch(resetCard());
  };
  const handleDecreace = () => {
    dispatch(decreaseOffset());
  };
  useDidUpdate(() => {
    dispatch(resetCard());
    if (search && filter === false) {
      getFilmSearch(page, search, year, filter,type).then((data) => {
        dispatch(setList(data.Search));
      });
    } else {
      dispatch(resetPage());
    }
    if (filter && search) {
      getFilmSearch(page, search, year, filter,type).then((data) => {
        dispatch(setListFilter(data.Search));
        console.log(page);
        console.log(year);

        console.log(data.Response);
      });
    }
  }, [filter, search, page,year,type]);
  
  useDidUpdate(() => {
    if (search.length === 0) {
      getFilm(page).then((data) => {
        dispatch(setFilms(data.Search));
      });
    }
    dispatch(resetCard());
  }, [search, dispatch]);

  const films = search ? card : mainFilms;
  return (
    <>
      <div className={styles.all}>
        <Filter></Filter>
        <div>
          <div className={styles.film}>
            {films?.map((film) => {
              return (
                <FilmCard
                  film={film}
                  key={film.imdbID}
                  link={`/filmCardOne/${film.imdbID}`}
                ></FilmCard>
              );
            })}
          </div>
          <div className={styles.buttonAll}>
            {card.length === 10 ? (
              page > 1 ? (
                <div>
                  <button className={styles.button} onClick={handleDecreace}>
                    Previous
                  </button>
                  <button className={styles.button} onClick={handleIncreace}>
                    Show more
                  </button>
                </div>
              ) : (
                <button className={styles.button} onClick={handleIncreace}>
                  Show more
                </button>
              )
            ) : page == 1 && card.length < 10 ? (
              <></>
            ) : (
              <button className={styles.button} onClick={handleDecreace}>
                Previous
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmList;
