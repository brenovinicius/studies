import React from 'react';
import Formulario from '../components/Formulario/index';
import Lista from '../components/Lista';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista></Lista>
    </div>
  );
}

export default App;