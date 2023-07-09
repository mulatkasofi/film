export interface FilmMain{
Search:FilmOne[]
totalResults:string,
Response:string,
page:number,
}
export interface Film{
Title:string,
Year:string,
imdbID:string,
Type:string,
Poster:string
 
}

export interface State {
  cardOne: FilmOne | null;
  card: FilmOne[];
  searchValue: string;
  page:number,
  year:string,
  search:string,
  mainFilms:Film[];
  filter:boolean;
  type:string,
  myFavorite:Film[]


}

export interface FilmOne{
    "Title":string,
    "Year":string,
    "Rated":string,
    "Released":string,
    "Runtime":string,
    "Genre":string,
    "Director":string,
    "Writer":string,
    "Actors":string,
    "Plot":string,
    "Language":string,
    "Country":string,
    "Awards":string,
    "Poster":string,
    "Ratings":[],
    "Metascore":string,
    "imdbRating":string,
    "imdbVotes":string,
    "imdbID":string,
    "Type":string,
    "DVD":string,
    "BoxOffice":string,
    "Production":string,
    "Website":string,
    "Response":string
}
