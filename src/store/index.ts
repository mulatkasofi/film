import { configureStore } from "@reduxjs/toolkit";

import filmReducer from "./film/film.reduser";

const store = configureStore({
  reducer: {
    film: filmReducer,
  },
});
export default store;
