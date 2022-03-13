import React from 'react'
import BtnHamburguer from './../../assets/img/ButtonHamburguer.png'
import "./styles.css"

export const ButtonHamburguer = () => {
    return (
        <button className='btnBurguer'>
            <img src={BtnHamburguer} alt='btnHamburguer' />
        </button>
    )
}
