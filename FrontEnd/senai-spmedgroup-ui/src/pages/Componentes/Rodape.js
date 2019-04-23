import React,{Component} from 'react';
import '../../assets/CSS/index.css';

import logo from '../../assets/imagens/Ativo 1.png';
function Rodape() {
    return(
        <div>
            <br/>
        <br/>
        <br/>
        <br/>
        <footer className="rodape">
          <p>SENAI-INFORMÁTICA</p>
          <div className="spmed">
          <img src={logo} />
          <p>SpmedGroup ©</p>
          </div>
        </footer>
        </div>
    );
}
export default Rodape;