import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">O que você quer estudar?</label>
          <input type="text" 
          name="tarefa" 
          id="tarefa" 
          placeholder="Insira o texto..."
          required/>
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo">Por quanto tempo?</label>
          <input type="time" 
          name="tempo" 
          id="tempo"
          step="1" 
          min="00:00:00"
          max="01:30:00"
          required/>
        </div>
        <Botao></Botao>
      </form>
    );
  }
}

export default Formulario;
