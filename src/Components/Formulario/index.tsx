import React from "react";
import Button from "../Button";
import style from './Formulario.module.scss'
import { ITarefa } from "../../Type/tarefas";
import { v4 as uuidv4 } from 'uuid'


class Formulario extends React.Component<{setTarefas: React.Dispatch< React.SetStateAction<ITarefa[]>>}>{
    state = {
        tarefa: '',
        tempo: '00:00',
    }

    adicionarTarefa(evento: React.FormEvent<HTMLElement>){
        evento.preventDefault();
        this.props.setTarefas(tarefaAntiga=>
            [
                ...tarefaAntiga, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
            )
        this.setState({
            tarefa:"",
            tempo:'00:00'
        })        
    }

    render(): React.ReactNode {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa:evento.target.value})}
                        id="tarefa"
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
                    value={this.state.tempo}
                    onChange={enveto => this.setState({...this.state, tempo:enveto.target.value})}
                    id="tempo"
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
}

export default Formulario;