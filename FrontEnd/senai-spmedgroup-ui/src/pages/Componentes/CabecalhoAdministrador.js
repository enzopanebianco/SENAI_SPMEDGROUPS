import React from'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/Ativo 1.png'
import '../../assets/CSS/index.css';

function CabecalhoAdmin() {
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
                    <li><a className="menu" type="checkbox">...</a></li>
                </ul>

            </div>
        </section>
            <div className="sub-header-list">
            <ul>
                <li><a>Cadastrar Paciente</a></li>
                <li><a>Cadastrar Médico</a></li>
                <li><a>Todas as Consultas</a></li>
            </ul>
            </div>
        </div>
    );
}
export default CabecalhoAdmin;