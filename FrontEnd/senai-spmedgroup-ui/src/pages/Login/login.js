import React, { Component } from 'react';
import '../../assets/CSS/login.css'

import Cabecalho from '../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape'
import Axios from 'axios';
import {parseJwt} from '../../services/auth';

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            senha:""
        }
        this.atualizaEstadoEmailForm=this.atualizaEstadoEmail.bind(this);
        this.atualizaEstadoSenhaForm=this.atualizaEstadoSenha.bind(this);
    }

    logar(event){
        event.preventDefault();
        Axios.post('http://192.168.3.48:5000/api/login',{
            
            email:this.state.email,
            senha:this.state.senha
        })
        .then(data=>{
            if(data.status === 200){
                console.log(data);
                localStorage.setItem("spmed-usuario", data.data.token);
                //Verifica o tipo de usuário e redireciona para a página default
                console.log(parseJwt().Role);
                if(parseJwt().tipo === "0"){
                  this.props.history.push("/todasconsultas");
                } else {
                  this.props.history.push("/");
                }
            }
            
       
        })
        .catch(erro=>("erro login",erro))
        
        
    }
    atualizaEstadoEmail(event){
        this.setState({email:event.target.value})
    }
    atualizaEstadoSenha(event){
        this.setState({senha:event.target.value})
    }
    componentDidMount(){
        localStorage.clear("spmed-usuario");
    }
    render(){
        return(
            <div>
                <Cabecalho />
                    <section className="fundo">
                <section className="campo-Logar">
                        <h2>LOGIN</h2>
                    <form onSubmit={this.logar.bind(this)}>
                        <div className="item">
                        <input type="text" placeholder="Insira seu email" value={this.state.email} onChange={this.atualizaEstadoEmailForm}/>
                        </div>
                        <div className="item">
                        <input type="password" placeholder="Insira sua senha" value={this.state.senha} onChange={this.atualizaEstadoSenhaForm}/>
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
               
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