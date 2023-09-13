import React from "react"
import './style-footer.css'
import logo2 from '../../assets/logo.png'
import logogit from '../../assets/logo_github.jpeg'
import { Link, useNavigate } from "react-router-dom"

function Footer(){
    const navigate = useNavigate();

    return (
        <footer>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('contato')}>Contato</li>
                    <li onClick={() => navigate('fotos')}>Fotos</li>
                    <li onClick={() => navigate('comentarios')}>Comentários</li>
                </ul>
            </nav>
            <div className="footer-visivel">
                <img  id="logo2" src={logo2} />
                <span id="span1">Todos os direitos reservados &copy;</span>
            </div>
            <div>
                <span id="span2">Desenvolvido por: <Link to={'https://github.com/Jonathas07'} target="blank" className="desenvolve" title="GitHub">Jonathas Souza</Link></span>
                   
            </div>
        </footer>
    )
}

export default Footer