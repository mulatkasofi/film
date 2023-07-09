import { State } from "./film/film.types";

export interface RootStore {
  store: any;
  film: State;
}
