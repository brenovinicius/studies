import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  addTarefa(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.state)
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
