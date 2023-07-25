import React, { Component } from "react";
import './styled.css'
import imgporject from './Captura de tela 2023-07-24 191759.png'

export default class Destaque extends Component {

    render() {
        return (
            <>
                <center>
                    <h1 style={{ marginTop: "50px", color: "#FFFFFF" }}>Projeto em Destaque na Semana</h1>
                </center>
                <div className="feature">
                    <div className="feature--description">
                        Bem-vindo(a) ao nosso emocionante projeto: o "NextPlay" - um player de vídeo inovador para uma experiência audiovisual excepcional!

                        O "NextPlay" foi desenvolvido com a mais avançada tecnologia para oferecer uma reprodução de vídeo fluida, de alta qualidade e sem interrupções. Nossa plataforma de streaming é capaz de lidar com uma variedade de formatos de vídeo, garantindo uma compatibilidade ampla e uma exibição perfeita em qualquer dispositivo, seja desktop, tablet ou smartphone.

                        Com uma interface moderna e intuitiva, o "NextPlay" oferece uma navegação simples e interativa para uma experiência de usuário aprimorada. Navegue facilmente entre listas de reprodução, marque seus vídeos favoritos e aproveite recursos como pausar, avançar e retroceder, além de ajustar a qualidade de vídeo para atender às suas preferências de conexão.

                        Nossa tecnologia de otimização de desempenho permite uma entrega rápida e eficiente dos conteúdos de vídeo, mesmo em conexões de internet mais lentas. Além disso, implementamos recursos de compartilhamento em redes sociais e incorporação para que você possa compartilhar seus vídeos favoritos com amigos e colegas.

                        O "NextPlay" também oferece suporte para legendas em vários idiomas, facilitando a acessibilidade e a compreensão de conteúdos para uma audiência global. E, para os criadores de conteúdo, fornecemos recursos avançados de análise para monitorar o desempenho de seus vídeos e conhecer melhor sua audiência.

                        Esteja você transmitindo filmes, séries, vídeos educacionais ou qualquer outro tipo de conteúdo, o "NextPlay" é a solução definitiva para uma experiência de vídeo imersiva, flexível e de alto desempenho.

                        Prepare-se para uma jornada audiovisual emocionante com o "NextPlay". Agora é a sua vez de dar o play e desfrutar de uma nova era em reprodução de vídeo!
                    </div>
                    <div style={{
                        alignItems: "center"
                    }}>
                        <center>
                            <img
                                style={{
                                    height: "300px",
                                    marginTop: "70px",
                                    marginLeft: "15px"
                                }}
                                src={imgporject} />
                        </center>
                    </div>
                </div>
            </>
        )
    }
}