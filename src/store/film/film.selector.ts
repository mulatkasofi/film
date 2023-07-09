import { RootStore } from "../types";
import {  Film, State } from "./film.types";

export const getSlice = (store: RootStore): State => store.film;

export const getAddInMyFavorite=(store: RootStore): Film[] => store.film.myFavorite;

export const itemInMyFavorite=(store: RootStore): boolean =>
  !!store.film.myFavorite.find(
    (item) => item.imdbID === store.film.cardOne?.imdbID
  );