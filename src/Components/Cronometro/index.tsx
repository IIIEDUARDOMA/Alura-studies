import Button from "../Button";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../Common/utils/time";
import { ITarefa } from "../../Types/tarefas";
import { useEffect, useState } from "react";


interface props {
    selecionado: ITarefa | undefined
    finalizarTarefa : () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: props){
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo) 
        {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]);

    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador>0){
                setTempo (contador - 1);
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }
    
    
    return(
        <div className={style.cronometro} >
            <p className={style.titulo}>Escolha um card e incie o cronometro!</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)} >
                Começar!
            </Button>
        </div>
    )
}