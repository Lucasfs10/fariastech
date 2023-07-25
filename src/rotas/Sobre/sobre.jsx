import { Component } from "react";
import Loading from "../components/Loading";

export default class Sobre extends Component {
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
                <Loading />
            </div>
        )
        
    }
}