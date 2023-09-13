import React from "react";
import './style-home.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Cards from "../../components/cards/cards";
import video from "../../assets/video.mp4";


function Home(){

    return(
        <>
            <Header />
            <main>
                <div id="banner"></div>
                <div id="trailer-container">
                    <div className="content">
                        <video controls className="trailer">
                            <source src={video} type="video/mp4" />
                        </video>
                        <div id="sinopse">
                            <p className="descriçao">
                            Após dois anos espreitando as ruas como Batman, 
                            Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. 
                            Com poucos aliados confiáveis, o vigilante solitário se estabelece como 
                            a personificação da vingança para a população.
                            </p>
                            <button className="button">
                                compre seu ingresso
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;