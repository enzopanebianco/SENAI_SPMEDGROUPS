import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/Ativo 1.png'
import '../../assets/CSS/index.css';
import App from '../Home/App';

function Cabecalho() {
    let token = localStorage.getItem("spmed-usuario")
  
if (token==null || token=="") {
    

    return (
        <div>
            <section className="header">
                <h1>SPMEDICALGROUP</h1>
               
                <img src={logo} />

                <div className="header-list">
                    <ul>

                        <li><Link to="/"><a >HOME</a></Link></li>
                        <li><Link to="/sobre"><a>SOBRE A CLÍNICA</a></Link></li>
                        <li><a href="">CONSULTAS</a></li>
                        <li><Link to="/login"><a href="">LOGIN</a></Link></li>
                        
                        

                    </ul>

                </div>
            </section>
        </div>
    );
    }
    else{
        return(
        <div>
        <section className="header">
            <h1>SPMEDICALGROUP</h1>
            <img src={logo} />

            <div className="header-list">
                <ul>

                    <li><Link to="/"><a >HOME</a></Link></li>
                    <li><a href="">SOBRE A CLÍNICA</a></li>
                    <li><a href="">CONSULTAS</a></li>
                    <li><Link to="/login"><a href="">LOGIN</a></Link></li>
                    <li><Link to="/login"><a href="">SAIR</a></Link></li>
                   
              
                </ul>

            </div>
        </section>
    </div>
    );
    }
}
export default Cabecalho;