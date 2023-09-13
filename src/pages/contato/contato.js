import React from "react"
import './style-cont.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function Contato(){
    return(
        <>
            <Header />
            <main>
                <div className="centro">
                    <span className="texto">Nome:</span>
                    <input type="text" placeholder="Digite seu nome" />

                    <span className="texto">E-mail:</span>
                    <input type="text" placeholder="Digite seu e-mail" />

                    <span className="texto">Sua mensagem:</span>
                    <textarea type="hipertext" placeholder="Digite sua mensagem" rows="10" cols="50"></textarea>
                    <button className="button-comentario" onClick={() => alert('é apenas um front-end de teste! Muito Obrigado')}>Enviar</button>
                </div>
            </main>
            <div className="centro-cell">
                <span className="texto">Nome:</span>
                <input type="text" placeholder="Digite seu nome" />

                <span className="texto">E-mail:</span>
                <input type="text" placeholder="Digite seu e-mail" />

                <span className="texto">Sua mensagem:</span>
                <textarea type="hipertext" placeholder="Digite sua mensagem" rows="10" cols="50"></textarea>
                <button className="button-comentario" onClick={() => alert('é apenas um front-end de teste! Muito Obrigado')}>Enviar</button>
            </div>
            <Footer />
        </>
    )
}

export default Contato;