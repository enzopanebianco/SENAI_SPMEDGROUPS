import React,{Component} from 'react';
import Cabecalho from '../Componentes/Cabecalho';
import imgfundo from '../../assets/imagens/logofundo.png';
import imgmed from '../../assets/imagens/medico-11022016-1000x552.jpg';
import Rodape from '../Componentes/Rodape';
import '../../assets/CSS/sobre.css'
class Sobre extends Component{
    render(){
        return(
            <div>
                <Cabecalho />
                <section class="about">
                <h2>SOBRE A CLÍNICA</h2>
                <img src={imgfundo} />
                <div class="img_banner">
                <img src={imgmed} /> 
                </div>
                <div className="app-tt">
                <h3>-Aplicativo</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              dolore magna ag elit, sed diam nonummy nibh euismod magna ag elit, sed diam nonummy nibh euismod ti magna ag
              elit, sed diam nonummy </p>
              <button>BAIXAR</button>
                </div>
                <div className="txt-a">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              dolore magna ag elit, sed diam nonummy nibh euismod magna ag elit, sed diam nonummy nibh euismod ti magna ag
              elit, sed diam nonummy nibh euismod titincidunt ut laoreet dolore magna aibh euismod tincidunt
              ut laoreet dolore magnibh euiit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod orem ipsum
                      dolor sit amet, consectetuer adipiscinsmod tincidunt ut laoreet dolore magnibh euismod tincidunt ut laoreet dolore
            magn</p>
                </div>
                <div className="txt-b">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              dolore magna ag elit, sed diam nonummy nibh euismod magna ag elit, sed diam nonummy nibh euismod ti magna ag
              elit, sed diam nonummy nibh euismod titincidunt ut laoreet dolore magna aibh euismod tincidunt
              ut laoreet dolore magnibh euiit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod orem ipsum
                      dolor sit amet, consectetuer adipiscinsmod tincidunt ut laoreet dolore magnibh euismod tincidunt ut laoreet dolore
            magn</p>
                </div>
                </section>
                <Rodape />
            </div>
        );
    }
}
export default Sobre;