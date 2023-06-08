import { useState } from 'react';
import Cronometro from '../Components/Cronometro';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import style from './App.module.scss'
import { ITarefa } from '../Type/tarefas';



function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
