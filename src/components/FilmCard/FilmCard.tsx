import React from "react";
import styles from "./FilmCars.module.css";
import { Film } from "../../store/film/film.types";
import { NavLink } from "react-router-dom";
interface BookProps {
  film: Film;
  link: string;
}

const FilmCard: React.FC<BookProps> = ({ film, link }) => {
  return (
    <NavLink to={link} key={film.imdbID}>
      <div className={styles.card}>
        <img src={film.Poster} alt="" className={styles.img} />
        <p className={styles.title}>{film.Title}</p>
        <p className={styles.title}>{film.Type}</p>
      </div>
    </NavLink>
  );
};
export default FilmCard;
