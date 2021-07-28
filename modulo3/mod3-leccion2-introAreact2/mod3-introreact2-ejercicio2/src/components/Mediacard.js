import React from "react";
import App from "./App";


class Mediacard extends React.Component{
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={this.props.foto} className="App-foto" alt="foto" />
                    <div className="App-header-title">
                    <h1 className="App-header-maintitle">{this.props.name}</h1>
                    <h3 className="App-header-subtitle">{this.props.date}</h3>
                    </div>
                </header>
                <main className="App-main">
                    <p className="App-main-text">
                     {this.props.text}
                    </p>
                </main>
                <footer className="App-footer">
                    <p className="App-footer-paragraph">Leer más...</p>
                    <div className="App-footer-container">
                    <p className="App-footer-paragraph">{this.props.likes}</p>
                    <i></i>
                    </div>
                </footer>
            </div>
        )
    }
}






















export default Mediacard;