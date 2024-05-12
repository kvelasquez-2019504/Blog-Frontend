import { useState } from 'react';
import './navbar.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    let Taller, Tecnologia, Practica;
    let clase = '';
    const toggleMenu = (event) => {
        if (event.target.id !== clase) {
            setMenuOpen(false);
            setMenuOpen(true);
            clase = event.target.id;
        } else {
            setMenuOpen(false);
        }
    };
    return (
        <div style={{ background: '#1bf1' }}>
            <nav>
                <ul>
                    <li ><a href="/"><img src="../../../src/img/Kinal.png" alt="Logo Kinal" /></a></li>
                    <li className='list-item'><a href="#" >Inicio</a></li>
                    <li className='list-item'><a href="#menu" onClick={toggleMenu} id='Taller'>{Taller = "Taller"}</a></li>
                    <li className='list-item'><a href="#menu" onClick={toggleMenu} id='Tecnologia'>{Tecnologia = "Tecnologia"}</a></li>
                    <li className='list-item'><a href="#menu" onClick={toggleMenu} id='Practica Supervisada'>{Practica = "Practica Supervisada"}</a></li>
                    <li className='list-item'>
                        <a href="#menu" onClick={toggleMenu}>
                            JSJS
                        </a>
                    </li>
                    {menuOpen && (
                        <ul className='dropdown' id='menu'>
                            <li className='dropdown__list'>
                                <a href="#" className='dropdown__link'>
                                    <span>Agregar</span>
                                </a>
                            </li>
                            <li className='dropdown__list'>
                                <a href="#" className='dropdown__link'>
                                    <span>Listar</span>
                                </a>
                            </li><li className='dropdown__list'>
                                <a href="#" className='dropdown__link'>
                                    <span>Listar</span>
                                </a>
                            </li><li className='dropdown__list'>
                                <a href="#" className='dropdown__link'>
                                    <span>Listar</span>
                                </a>
                            </li>
                        </ul>
                    )}
                </ul>
            </nav>
        </div>
    );
}