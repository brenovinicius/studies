import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Tarefa } from '../types/tarefa';
import style from './App.module.scss'

function App() {
  let [tarefas, setTarefas] = useState<Tarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}></Lista>
      <Cronometro/>
    </div>
  );
}

export default App;
