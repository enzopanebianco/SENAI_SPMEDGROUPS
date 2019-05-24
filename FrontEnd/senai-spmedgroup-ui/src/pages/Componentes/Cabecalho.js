import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/Ativo 1.png';
import UsuarioPerfil from  '../../assets/imagens/usuarioPerfil.png';
import '../../assets/CSS/index.css';
import {decode} from '../../services/auth';
class Cabecalho extends Component {
    constructor(){
        super();
        this.state={
            nome:"",
        }
    }
    buscarNome(){
        const value = localStorage.getItem("spmed-usuario");
        let jwtdecode = require('jwt-decode');
        this.setState({nome:jwtdecode(value).nome});
    }
    componentDidMount(){
        this.buscarNome();
    }
    render(){
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
                        <li><a>{this.state.nome}</a>
                        
                        </li>
                        

                    </ul>

                </div>
            </section>
           
            
        
        </div>
    );
    }
       
    }
    
     


export default Cabecalho;