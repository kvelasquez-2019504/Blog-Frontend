import { useState } from 'react';
import './navbar.css';

export const Navbar = () => {

    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li ><a href="/"><img src="../../../src/img/Kinal.png" alt="Logo Kinal" /></a></li>
                    <li className='list-item'><a href="">Inicio</a></li>
                    <li className='list-item'><a href="">Taller</a></li>
                    <li className='list-item'><a href="">Tecnología</a></li>
                    <li className='list-item'><a href="">Practica Supervisada</a></li>
                    <li className='list-item'><a href="">asdf</a></li>
                </ul>
            </nav>
        </div>
    );
}