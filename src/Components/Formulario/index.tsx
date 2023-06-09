import React, { useState } from "react";
import Button from "../Button";
import style from './Formulario.module.scss'
import { ITarefa } from "../../Types/tarefas";
import { v4 as uuidv4 } from 'uuid'

interface Props {
    setTarefas: React.Dispatch< React.SetStateAction<ITarefa[]>>
}

function Formulario ({setTarefas}: Props){
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    function adicionarTarefa(evento: React.FormEvent<HTMLElement>){
        evento.preventDefault();
        setTarefas(tarefaAntiga=>
            [
                ...tarefaAntiga, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
            );
        setTarefa('');
        setTempo("00:00");}
    
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    id="tarefa"
                    onChange={evento => setTarefa(evento.target.value)}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                type="time"
                step="1"
                name="tempo"
                value={tempo}
                id="tempo"
                onChange={evento => setTempo(evento.target.value)}
                min="00:00:00"
                max="03:30:00"
                required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}



export default Formulario;