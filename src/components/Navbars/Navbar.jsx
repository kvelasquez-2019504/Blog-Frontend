import { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUserDetails } from '../../shared/hooks/useUserDetails';
export const Navbar =  () => {
    const {logout} = useUserDetails();

    const handlerLogout = (event)=>{
        event.preventDefault();
        logout();
    }

    return (
        <div>
            <nav>
                <ul>
                    <li ><a href="/"><img src="../../../src/img/Kinal.png" alt="Logo Kinal" /></a></li>
                    <li className='list-item'><Link onClick={handlerLogout}>LOGOUT</Link></li>
                    <li className='list-item'><Link to='/list'>LISTAR</Link></li>
                    <li className='list-item'><a href="#menu"> AGREGAR</a></li>
                </ul>
            </nav>
        </div>
    );
}