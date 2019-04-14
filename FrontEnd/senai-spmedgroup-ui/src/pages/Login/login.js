import React, { Component } from 'react';
import '../../assets/CSS/login.css'
import Cabecalho from '../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape'
class Login extends Component{
    render(){
        return(
            <div>
                <Cabecalho />
                    <section className="fundo">
                <section className="campo-Logar">
                        <h2>LOGIN</h2>
                    <form>
                        <div className="item">
                        <input type="text" placeholder="Insira seu email" />
                        </div>
                        <div className="item">
                        <input type="text" placeholder="Insira sua senha" />
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                {/* <script type="text/javascript">
                     let item = document.querySelectior(".item");
                     add.EventListener("keyup"function (event) 
                     event.preventDefault()
                     if (item.length.value>"5") {
                         styleMedia.border="green"
                        }
                        )          
                    </script> */}
                    </section>
                <div className="aa">
                    
            <Rodape />
            </div>
                    </section>
            </div>
        );
    }
}
export default Login;