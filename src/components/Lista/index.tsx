import React from "react";
import { Tarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

type ListaProps = {
  tarefas: Tarefa[]
  selecionaTarefa: (tarefa: Tarefa) => void
}

function Lista({tarefas, selecionaTarefa}: ListaProps) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} tarefa={item} selecionaTarefa={selecionaTarefa}/>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
