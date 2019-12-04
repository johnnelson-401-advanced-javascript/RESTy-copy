import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from '../containers/Main';
import style from './App.css';

export default function App() {

  return (
    <div className={style.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
