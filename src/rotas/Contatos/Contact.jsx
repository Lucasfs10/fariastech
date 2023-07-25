import React from "react";
import './style.css'

export default function Contact() {
    return (
        <center>
            <div >
                <center><h1 style={{marginTop:"50px", color:"#FFFFFF"}}>Entre em Contato</h1></center>
                <div className="feature--description">
                    Estamos ansiosos para ouvir mais sobre o seu projeto e oferecer soluções que atendam às suas necessidades.
                    Não hesite em nos enviar suas dúvidas e detalhes sobre o que você deseja realizar.
                    Nossa equipe terá o prazer de ajudá-lo(a) em cada etapa do processo.
                    Aguardamos o seu contato!
                </div>
                <div className="form">
                    <div>
                        <input className="input" type="text" placeholder="Nome"></input>
                        <input className="input" type="text" placeholder="Telefone"></input>
                    </div>
                    <div>
                        <input className="input" type="text" placeholder="E-Mail"></input>
                        <input className="textarea" type="text" placeholder="Mensagem"></input>
                    </div>
                    <center><button class="button">Enviar</button></center>
                </div>
            </div>
        </center>
    )
}