import React, { Component } from "react";
import './styleds.css'

export default class Loading extends Component{
    render(){
        return (
            <div class="dot-spinner"
            style={{
                marginTop: "35px"
            }}>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
            </div>
        )
    }  
}