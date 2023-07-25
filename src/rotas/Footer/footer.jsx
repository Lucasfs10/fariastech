import React, { Component } from "react";
// import Logo from './logoBaner-removebg-preview.png'
import './styled.css'
// import { FaBars } from 'react-icons/fa'
// import Sidebar from "../Sidebar";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export default class Footer extends Component {

    state = {
        sidebar: false
    }

    onClick = (e) => {
        if (this.state.sidebar) {
            this.setState({ sidebar: false })
        }
        else {
            this.setState({ sidebar: true })
        }

        console.log(this.state.sidebar)
    }

    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="footer--conteudo">
                        <div className="footer--duvida">
                            <span>Tem uma Dúvida?</span>
                            <br />
                            <a>✆ +55 15 988083111</a>

                            <a>✉ contato@fariastech.com.br</a>

                            <a>✉ comercial@fariastech.com.br</a>
                        </div>
                        <div className="footer--link">
                            <span>LINKS</span>
                            <br />
                            <a href="/">➞ Home</a>
                            <a href="/about">➞ Sobre</a>
                            <a href="/services">➞ Serviços</a>
                            <a href="/contact">➞ Contato</a>
                        </div>
                        <div >
                            <span>Conecte-se Conosco</span>
                            <br />
                            <div className="footer--redes">
                                <center>
                                    <a href="https://www.instagram.com/"><FacebookIcon /></a>
                                    <a href="https://www.instagram.com/"><InstagramIcon /> </a>
                                    <a href="https://www.instagram.com/"><TwitterIcon />  </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}