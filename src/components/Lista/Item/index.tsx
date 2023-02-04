import { Tarefa } from "../../../types/tarefa";
import style from "../Lista.module.scss";

type ItemProps ={
  item: Tarefa
}
export default function Item({item} : ItemProps) {
  console.log(item.id);
    return ( 
    <li className={style.item}>
        <h3>{item.tarefa}</h3>
        <span>{item.tempo}</span>
      </li>
    );
}