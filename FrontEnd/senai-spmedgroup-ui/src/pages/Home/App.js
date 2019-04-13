import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../assets/CSS/index.css';
import imgmedicos from '../../assets/imagens/img-medicos-2.png'
import barrinha from '../../assets/imagens/1x/barrinha.png'
import imgprontuario from '../../assets/imagens/ambulance-architecture-building-263402.jpg'
import Cabecalho from '../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';

class App extends Component {
  render() {
    return (
      <div>
        <Cabecalho />
        <section className="banner">
          <img src={imgmedicos} alt="medicos" />
          <h2>SPMEDICALGROUP</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              dolore magna ag elit, sed diam nonummy nibh euismod magna ag elit, sed diam nonummy nibh euismod ti magna ag
              elit, sed diam nonummy nibh euismod titincidunt ut laoreet dolore magna aibh euismod tincidunt
              ut laoreet dolore magnibh euiit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod orem ipsum
                      dolor sit amet, consectetuer adipiscinsmod tincidunt ut laoreet dolore magnibh euismod tincidunt ut laoreet dolore
            magn</p>
        </section>
        <div className="barrinha">
          <img src={barrinha} alt="" />
        </div>
        
        <section className="sobre" id="flex-container">
          <div className="flex">
            <article className="clinica">
              <h3>SOBRE A CLÍNICA</h3>
              
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod orem ipsum
                  dolor sit amet, consectetuer adipiscing elit,orem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonumm sed diam nonumm</p>
            </article>
          </div>
          <div className="flex">
           <article className="app">
              <h3>Applicativo SPMEDICALGROUP</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod orem ipsum
                  dolor sit amet, consectetuer adipiscing elit,orem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonumm sed diam nonumm</p>
           </article>
           </div>
           <div className="flex">
            <article className="medicos">
              <h3>OS MELHORES MÉDICOS</h3>
              <p>Lorem ipsum dolor sit amet, consectetudolor sit amet, consectetudolor sit amet, consectetudolor sit
                  amet, consectetudolor sit amet, consectetudolor sit amet, consectetudolor sit amet, consectetudolor
                    sit amet, consectetudolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
            </article>
          </div>
        </section>
        <section className="local">
          <img src={imgprontuario} />
          <div className="local-txt">
            <h3>LOCALIZAÇÃO</h3>
            <p>Lorem ipsum dolor sit amet, consectetudolor sit amet, consectetudolor sit amet, consectetudolor sit
                  amet, consectetudolor sit amet, consectetudolor sit amet, consectetudolor sit amet, consectetudolor</p>
          </div>
        </section>
        <Rodape />
      </div>
    );
  }
}

export default App;
