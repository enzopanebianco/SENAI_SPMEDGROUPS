import React, { Component } from 'react';


import imgmedicos from '../../assets/imagens/img-medicos-2.png'
import barrinha from '../../assets/imagens/1x/barrinha.png'
import imgprontuario from '../../assets/imagens/ambulance-architecture-building-263402.jpg';
import imgApp from '../../assets/imagens/1x/Ativo 2.png'
import Cabecalho from '../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import img from '../../assets/imagens/appointment-book-blur-care-40568.jpg'
import Axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lista: [],
        id: "",
        nomeFantasia: "",
        razaoSocial: "",
        cnpj: "",
        endereço: ""
        
    }
  }
    Listar(){
      Axios.get('http://localhost:5000/api/clinicas')
      .then(data => {
        console.log(data)
        this.setState({ lista: data.data });
    })
    .catch(erro => console.log(erro))
    }
  componentDidMount(){
    this.Listar();
  }
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
              <img src={img} />
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod orem ipsum
                  dolor sit amet, consectetuer adipiscing elit,orem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonumm sed diam nonumm</p>
            </article>
          </div>
          <div className="flex">
           <article className="app">
              <h3>Applicativo SPMEDICALGROUP</h3>
              <img src={imgApp} />
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
            <div className="local-clinica">
            {
              this.state.lista.map(function (clinica) {
                return(
                  <tr key={clinica.id}>
                    
                    <td>{clinica.endereço}</td>
                    
                  </tr> 
                );
              })
            }
            </div>
          </div>
        </section>
        <Rodape />
      </div>
    );
  }
}

export default App;
