import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/Ativo 1.png'
import '../../assets/CSS/index.css';
import {decode} from '../../services/auth';
function Cabecalho () {
     
    return (
        <div>
            <section className="header">
                <h1>SPMEDICALGROUP</h1>
               
                <img src={logo} />

                <div className="header-list">
                    <ul>

                        <li><Link to="/"><a >HOME</a></Link></li>
                        <li><Link to="/sobre"><a>SOBRE A CLÍNICA</a></Link></li>
                        <li><Link to="/consultas/pacientes"><a>CONSULTAS</a></Link></li>
                        <li><Link to="/login"><a href="">LOGIN</a></Link></li>
                        
                        

                    </ul>

                </div>
            </section>
           
            
        
        </div>
    );
       }
    
     


export default Cabecalho;