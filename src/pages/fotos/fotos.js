import React from "react"
import './style-fotos.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function Fotos(){
    return(
        <>
          <Header />
          <main>
            <div className="conteudo">
              <div className="foto f1"></div>
              <div className="foto f2"></div>
              <div className="foto f3"></div>
              <div className="foto f4"></div>
              <div className="foto f5"></div>
              <div className="foto f6"></div>            
            </div>
          </main>
          <Footer />
        </>
    )
}

export default Fotos;