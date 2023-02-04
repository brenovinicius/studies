import React from "react";
import style from "./Botao.module.scss";

type BotaoProps = {
  type?: "button" | "submit" | "reset" | undefined,
  children: React.ReactNode
}
class Botao extends React.Component<BotaoProps> {
  render() {
    return <button type={this.props.type} className={style.botao}>{this.props.children}</button>;
  }
}

export default Botao;
