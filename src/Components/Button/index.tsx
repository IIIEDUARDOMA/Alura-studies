import React from "react";
import style from './button.module.scss'

interface props {
    children?: React.ReactNode,
    type?: 'button'|'submit'|'reset'|undefined,
    onClick?: () => void
}

function Button ({type, onClick, children}: props){
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
        )
}

export default Button;

