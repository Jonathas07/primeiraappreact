import React from "react";
import './style-head.css';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';

function Header(){
    const navigate = useNavigate();

    return(
        <header>
            <img id="logo" src={logo} onClick={() => navigate('/')}/>
            <nav>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/contato')}>Contato</li>
                    <li onClick={() => navigate('/fotos')}>Fotos</li>
                    <li onClick={() => navigate('/comentarios')}>Comentários</li>                  
                </ul>
            </nav>
        </header>
    )
}


export default Header;