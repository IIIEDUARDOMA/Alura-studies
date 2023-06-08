import { useState } from "react";
import Item from "./Item";
import style from "./Lista.module.scss";
import { ITarefa } from "../../Type/tarefas";

interface props {
   tarefas:ITarefa[],
   selecionaTarefa: (tarefaSelecionada: ITarefa)=> void
}

function Lista({ tarefas, selecionaTarefa }:props) {
   
   return (
      <aside className={style.listaTarefas}>
         <h2 >Estudos do dia</h2>
         <ul>
            {tarefas.map(item => (
               <Item
                selecionaTarefa={selecionaTarefa}
                key={item.id}
                {...item} 
               />
            ))}
         </ul>
      </aside>
   );
}

export default Lista;
