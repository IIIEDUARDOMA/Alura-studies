import { ITarefa } from "../../../Type/tarefas";
import style from "../Lista.module.scss";

interface props extends ITarefa{
   selecionaTarefa: (tarefaSelecionada: ITarefa)=> void
}

export default function Item({
   tarefa,
   tempo,
   selecionado,
   completado,
   id,
   selecionaTarefa
}: props
) {
   return (
      <li 
         className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
         onClick={()=> selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
         })}
      >
         <h3>{tarefa}</h3>
         <span>{tempo}</span>
      </li>
   );
}
