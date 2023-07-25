import React, { Component } from "react";
import Logo from './logoBaner-removebg-preview.png'
import './styled.css'
// import { FaBars } from 'react-icons/fa'
// import Sidebar from "../Sidebar";

export default class Header extends Component {

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
            <div>
                <header className="header">
                    <div className="header__logo">
                        <a href="/">
                            <img src={Logo} />
                        </a>
                        {/* <FaBars onClick={this.onClick} />
                    {this.state.sidebar && <Sidebar close={this.state.sidebar}/>} */}
                    </div>
                    <div className="header__user">
                        <a href="/">● Home</a>
                        <a href="/about">● Sobre</a>
                        <a href="/services">● Serviços</a>
                        <a href="/contact">● Contato</a>
                    </div>
                </header>
            </div>
        )
    }
}