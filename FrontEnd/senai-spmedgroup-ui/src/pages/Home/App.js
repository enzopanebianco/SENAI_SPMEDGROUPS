import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../assets/CSS/index.css';
import logo from '../../assets/imagens/Ativo 1.png'
import imgmedicos from '../../assets/imagens/img-medicos-2.png'
import barrinha from '../../assets/imagens/1x/barrinha.png'
import imgprontuario from '../../assets/imagens/appointment-book-blur-care-40568.jpg'

class App extends Component {
  render() {
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
        <br />
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
      </div>
    );
  }
}

export default App;
