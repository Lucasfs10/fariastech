import React, { Component } from "react";
import './styled.css'
import Logo from './Captura_de_tela_2023-07-24_185412-removebg-preview.png'
import Resumo from "../Resumo/resumo";
import Destaque from "../Destaque/destaque";

export default class Informacoes extends Component {

    render() {
        return (
            <>
                <div style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(https://portal.fgv.br/sites/portal.fgv.br/files/styles/noticia_geral/public/noticias/01/23/evento_tecnologia_da_informacao.jpg?itok=-_XRz2Xl)`
                }}>
                    <div className="feature--vertical">
                        <div className="feature--horizontal">
                            <img src={Logo} />
                        </div>
                    </div>
                </div>
            <Resumo />
            <Destaque />
            </>
        )
    }
}

