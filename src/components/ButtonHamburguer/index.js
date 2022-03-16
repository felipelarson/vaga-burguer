import React, { useState } from 'react'
import { MenuMobile } from '../MenuMobile'
import BtnHamburguer from './../../assets/img/ButtonHamburguer.png'
import "./styles.css"

export const ButtonHamburguer = () => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => setOpen(!open)

    return (
        <>
            <button className='btnBurguer' onClick={handleClickOpen}>
                <img src={BtnHamburguer} alt='btnHamburguer' />
            </button>
            {open && <MenuMobile />}
        </>
    )
}
