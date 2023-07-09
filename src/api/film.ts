
import {  FilmMain } from "../store/film/film.types";


export const getFilm = async (page:number):Promise<FilmMain> => {
  const res = await fetch(`https://omdbapi.com/?s=Harry&page=${page}&apikey=914f39a6`);
  const data = await res.json();
  return data;
};
