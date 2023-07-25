import React, { Component } from "react";
import './styled.css'
import Loading from "../components/Loading";

export default class Servicos extends Component {
    render() {
        return (
            <div style={{
                height: "70vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h1 style={{
                    marginTop: "100px",
                    color: "#FFFFFF"
                }}>Coming Soon...</h1>              
                {/* <div class="dot-spinner" style={{
                    marginTop: "40px"
                }}>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                    <div class="dot-spinner__dot"></div>
                </div> */}
                <Loading/>
            </div>
        )
    }
}