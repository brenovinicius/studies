import { Tarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

type ItemProps ={
  tarefa: Tarefa
  selecionaTarefa: (tarefa: Tarefa) => void
}
export default function Item({tarefa, selecionaTarefa} : ItemProps) {
    return ( 
    <li className={`${style.item} ${tarefa.selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa(tarefa)}>
        <h3>{tarefa.tarefa}</h3>
        <span>{tarefa.tempo}</span>
      </li>
    );
}