import React from 'react'
import './styles.css'

export const Background = ({ children }) => {
    return (
        <div className="container">
            <span class="circle-right"></span>
            <span class="circle-top"></span>
            <span class="circle-bottom"></span>
            <div className='children'>{children}</div>
        </div>
    )
}
