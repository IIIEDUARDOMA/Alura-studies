import { useState } from 'react';
import Cronometro from '../Components/Cronometro';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import style from './App.module.scss'
import { ITarefa } from '../Types/tarefas';



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(
      tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })
    ));  
  };

  function finalizarTarefa(){
    if (selecionado) {
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id){
            return{
              ...tarefa,
              selecionado : false,
              completado : true
            }
          }
          return tarefa;
        }))
    }
  }

  
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado = {selecionado}
        finalizarTarefa = {finalizarTarefa}
      />
    </div>
  );
}

export default App;
