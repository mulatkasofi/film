import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import { FILE } from 'dns';
import FilmList from './components/FilmList/FilmList';
import { Provider } from 'react-redux';
import store from './store';
import PublickRouter from './routes/Public/PublicRoutes';

function App() {
  return (
   <Provider store={store} >
    {/* <Header name={'Sofi Krasovskaya'} shortName={'S'}></Header>
   <FilmList></FilmList> */}
   <PublickRouter />
   
   </Provider>
  );
}

export default App;
