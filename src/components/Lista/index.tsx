import React from "react";
import { Tarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

type ListaProps = {
  tarefas: Tarefa[]
}

function Lista({tarefas}: ListaProps) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} item={item}/>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
