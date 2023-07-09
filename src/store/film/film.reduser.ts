import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State, Film, FilmOne } from "./film.types";


const initialState: State = {
  card: [],
  searchValue: "",
  cardOne: null,
  page:1,
  search: "",
  mainFilms:[],
  year:"",
  filter:false,
  type:'',
  myFavorite:[]
};

const step = 1;
const film = createSlice({
  name: "film",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<FilmOne[]>) => {
  
         state.card= [...state.card,...action.payload]

    },
    setListFilter: (state, action: PayloadAction<FilmOne[]>) => {
      state.card= action.payload
      
    },
   setClearYear: (state) => {
      state.year= ''
      
    },
    setTypeClear: (state) => {
      state.type= ''
      
    },
  
    setQueryValue: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setYearValue:(state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    setTypeValue:(state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setFilms: (state, action: PayloadAction<Film[]>) => {
      state.mainFilms = action.payload;
    },
    
    setFilmOne: (state, action: PayloadAction<FilmOne>) => {
      state.cardOne = action.payload;
    },
    increaseOffset: (state) => {
      state.page += step;
    },
     decreaseOffset: (state) => {
      state.page -= step;
    },
  resetFilm: (state) => {
      state.cardOne = null;
    },
    resetCard: (state) => {
      state.card = [];
    },
      resetPage: (state) => {
      state.page = initialState.page;
    },
    sortYearTrue:(state) => {
      state.filter=true 
     
    },
     sortYearFalse:(state) => {
      state.filter=false
      
     
    },
  addToMyfavoriteAll:(state, action: PayloadAction<FilmOne[]>)=>{
    state.myFavorite=action.payload;
  },
    addToMyfavorite:(state, action: PayloadAction<Film>)=>{
    state.myFavorite=[...state.myFavorite,action.payload];
  }

    
  }


  
});

export const {
  setList,
  setFilmOne,
  increaseOffset,
  resetFilm,
  resetCard,
  resetPage,
  setQueryValue,
  setFilms,
  sortYearTrue,
  sortYearFalse,
  decreaseOffset,
  setListFilter,
  setYearValue,
  setClearYear,
  setTypeValue,
  setTypeClear,
  addToMyfavorite,
  addToMyfavoriteAll
  
} = film.actions;

export default film.reducer;
