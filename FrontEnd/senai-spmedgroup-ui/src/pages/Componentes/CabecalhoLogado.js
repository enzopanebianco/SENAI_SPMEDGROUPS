import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/Ativo 1.png';
import {MenuSecreto,Sair} from './styles';
import '../../assets/CSS/index.css';
import { FaCaretDown,FaSignOutAlt } from 'react-icons/fa';

import {parseJwt} from '../../services/auth';
class CabecalhoLogado extends Component {
    constructor(){
        super();
        this.state={
            nome:"",
        }
    }
     mostrar() {
        if(  document.getElementById("menusecreto").style.display="none")
        {
        document.getElementById("menusecreto").style.display="block"
        }
        else   {
            document.getElementById("menusecreto").style.display="none"
        }
        
    }
    sair(event){
        event.preventDefault();
        localStorage.clear();
        window.location.reload();
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
                        <li><p style={{textTransform:"uppercase"}}>{this.state.nome}<a onClick={this.mostrar}><FaCaretDown /></a></p></li>
                                                
                        <MenuSecreto id="menusecreto" style={{display:"none"}} >
                            <Sair>
                                <h5>Sair  <FaSignOutAlt onClick={this.sair}/></h5>
                                
                            </Sair>

                        </MenuSecreto>
                    </ul>

                </div>
            </section>
           
            
        
        </div>
    );
    }
       
    }
    
     


export default CabecalhoLogado;