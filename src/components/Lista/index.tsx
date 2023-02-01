import React from "react";
import Item from "./Item";
import style from "./Lista.module.scss";

function Lista() {
  const tarefas = [
    { nome: "Java", tempo: "02:00:00" },
    { nome: "Python", tempo: "02:00:00" },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
         <Item tempo={item.tempo} tarefa={item.nome} key={index}/>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
