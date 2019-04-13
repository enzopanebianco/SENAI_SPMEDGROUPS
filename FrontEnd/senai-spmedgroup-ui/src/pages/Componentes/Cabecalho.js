import React, { Component } from 'react';
import logo from '../../assets/imagens/Ativo 1.png'
function Cabecalho() {

    return (
        <div>
            <section className="header">
                <h1>SPMEDICALGROUP</h1>
                <img src={logo} />

                <div className="header-list">
                    <ul>

                        <li><a href="">HOME</a></li>
                        <li><a href="">SOBRE A CLÍNICA</a></li>
                        <li><a href="">CONSULTAS</a></li>
                        <li><a href="">LOGIN</a></li>

                    </ul>

                </div>
            </section>
        </div>
    );

}
export default Cabecalho;