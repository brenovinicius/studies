import React from "react";
import style from './Lista.module.scss';

function Lista() {
  const tarefas = [{ nome: "Java", tempo: "02:00:00" }, { nome: "Python", tempo: "03:00:00" }];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} className={style.item}>
            <h3>{item.nome}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
