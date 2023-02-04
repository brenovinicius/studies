import React from "react";
import { Tarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import {v4 as uuidv4 } from 'uuid';

type FormularioProps = {
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>
}

const InitialState: Tarefa =  {
  tarefa: "",
  tempo: "00:00",
  id: "",
  selecionado: false,
  completado: false
}
class Formulario extends React.Component<FormularioProps> {

  state: Tarefa = InitialState;

  addTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas(tarefas => 
      [...tarefas,
       {...this.state, selecionado: false, completado: false, id: uuidv4()},
      ]);
    this.setState(InitialState);
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">O que você quer estudar?</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="Insira o texto..."
            value={this.state.tarefa}
            onChange={(event) =>
              this.setState({ ...this.state, tarefa: event.target.value })
            }
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Por quanto tempo?</label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            step="1"
            min="00:00:00"
            max="01:30:00"
            value={this.state.tempo}
            onChange={(event) =>
              this.setState({ ...this.state, tempo: event.target.value })
            }
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;
