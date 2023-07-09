import { Film,FilmOne} from "../store/film/film.types";

export const getFilmOne = async (id: FilmOne['imdbID']): Promise<FilmOne> => {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=914f39a6`);
  const data = await res.json();
  return data;
};
