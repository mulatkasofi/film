import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilm } from "../../api/film";
import { addToMyfavorite, increaseOffset, setList } from "../../store/film/film.reduser";
import { getSlice, itemInMyFavorite } from "../../store/film/film.selector";
import FilmCard from "../FilmCard/FilmCard";
import styles from "./FilmCardOneItem.module.css";
import Filter from "../Filter/Filter";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { FilmOne } from "../../store/film/film.types";
import img1 from "../../img/Bookmark.png";
import img2 from "../../img/Bookmark 2.png";
import img3 from "../../img/Vector (1).png";
import right from "../../img/Vector 1 (Stroke) — копия.png";
import left from "../../img/Vector 1 (Stroke).png";
import BasicCarousel from "../Recomendation/Recomendation";
import shuffle from "lodash.shuffle";
import { useParams } from "react-router";
export interface FilmCardOneItemProps {
  cardOne: FilmOne;
}
const FilmCardOneItem: React.FC<FilmCardOneItemProps> = ({ cardOne }) => {
  //  const { id } = useParams();
   const dispatch=useDispatch()
// const {mainFilms}=useSelector(getSlice)
const itemInMyFavorites=useSelector(itemInMyFavorite)
// const randomArticles = useMemo(() => shuffle(mainFilms).slice(0, 10), [mainFilms, id]);

// const [[start, end], setSlide] = useState([0, 4]);
const handleAddMyFavorite=()=>{
  dispatch(addToMyfavorite(cardOne))
 
}
// const handleNext = () => {
//   if (end === 10) return;
//   const nextStart = start + 1;
//   const nextEnd = end + 1;
//   setSlide([nextStart, nextEnd]);
// };
// const handlePrev = () => {
//   if (start === 0) return;
//   const nextStart = start - 1;
//   const nextEnd = end - 1;
//   setSlide([nextStart, nextEnd]);
// };

  return (
    <div className={styles.display}>
      <Filter></Filter>
      <div className={styles.display}>
        <div>
          <img src={cardOne.Poster} alt="" className={styles.poster} />
          <div className={styles.saveBlock}>
            {itemInMyFavorites ? (
              <button className={styles.save12} >
                <img src={img1} alt="" />
              </button>
            ) : (
              <button className={styles.save1} onClick={handleAddMyFavorite}>
                <img src={img1} alt="" />
              </button>
            )}

            <button className={styles.save2}>
              <img src={img2} alt="" />
            </button>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.genre}>{cardOne.Genre.replaceAll(",", " ●")}</p>

          <p className={styles.title}>{cardOne.Title}</p>
          <div className={styles.rate}>
            <div className={styles.imdb}>
              <img src={img3} alt="" />
              <p className={styles.imdbRate}>{cardOne.imdbRating}</p>
            </div>
            <div className={styles.imdb}>
              <p className={styles.run}>{cardOne.Runtime}</p>
            </div>
          </div>
          <p className={styles.plot}>{cardOne.Plot}</p>
          <div className={styles.infoB}>
            <div className={styles.block}>
              <p className={styles.name}>Year</p>
              <p className={styles.name}>Released</p>
              <p className={styles.name}>BoxOffice</p>
              <p className={styles.name}>Country</p>
              <p className={styles.name}>Production</p>
              <p className={styles.name}>Actors</p>
              <p className={styles.name}>Director</p>
              <p className={styles.name}>Writers</p>
            </div>
            <div>
              <p className={styles.nameInfo}>{cardOne.Year}</p>
              <p className={styles.nameInfo}>{cardOne.Released}</p>
              <p className={styles.nameInfo}>{cardOne.BoxOffice}</p>
              <p className={styles.nameInfo}>{cardOne.Country}</p>
              <p className={styles.nameInfo}>{cardOne.Production}</p>
              <p className={styles.nameInfo}>{cardOne.Actors}</p>
              <p className={styles.nameInfo}>{cardOne.Director}</p>
              <p className={styles.nameInfo}>{cardOne.Writer}</p>
            </div>
          </div>

          {/* <div className={styles.recom}>
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
                film={film} link={""}  key={film.imdbID}              
              ></FilmCard>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FilmCardOneItem;
