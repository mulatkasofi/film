import React from "react";
import { useSelector } from "react-redux";
import { getAddInMyFavorite } from "../../store/film/film.selector";
import FilmCard from "../FilmCard/FilmCard";
import Filter from "../Filter/Filter";
import styles from './MyFavorite.module.css'

const MyFavorite: React.FC = () => {
    const myFavorite=useSelector(getAddInMyFavorite)
 
    
  return (
  <div className={styles.display}>
  <Filter></Filter>
 {myFavorite.map((card)=>{
    return (
      <FilmCard film={card} link={`/filmCardOne/${card.imdbID}`} key={card.imdbID}></FilmCard>
    );
 })}
  </div>
  );
};

export default MyFavorite;
