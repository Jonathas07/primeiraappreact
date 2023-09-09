import React from "react"
import './style.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function Contato(){
    return(
        <>
            <Header />
            <main>
                <div>
                    <span>Nome:</span>
                    <input type="text" id="form1" />

                    <span>E-mail:</span>
                    <input type="text" id="form1" />

                    <span>Sua mensagem:</span>
                    <textarea type="hipertext" id="form1" ></textarea>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contato;