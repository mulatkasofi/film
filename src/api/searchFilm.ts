
import {  FilmMain } from "../store/film/film.types";


export const getFilmSearch = async (page:number,search:string,year:string,filter:boolean,type:string):Promise<FilmMain> => {
  const res = await fetch(`https://omdbapi.com/?s=${search}&y=${year}&page=${page}&type=${type}&apikey=914f39a6`);
  const data = await res.json();
    console.log(data);
  if(filter && data.Response!=='False'){
     data.Search.sort((a: { Year: number; },b: { Year: number; })=>{
      if (a.Year < b.Year) {
          return 1;
          
        }
      if (a.Year > b.Year) {

          return -1;
          
       }
      return 0;
      })
    
  }
  if(data.Response==='False'){
    data.Search=[]
    alert('No film')
  }

  
  return data;
};
