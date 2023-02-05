import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Tarefa } from '../types/tarefa';
import style from './App.module.scss'

function App() {
  let [tarefas, setTarefas] = useState<Tarefa[]>([]);
  let [selecionado, setSelecionado] = useState<Tarefa>();

  function selecionaTarefa(tarefaSelecionada: Tarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({ ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false })))
    console.log(tarefas)
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas}></Lista>
      <Cronometro />
    </div>
  );
}

export default App;
