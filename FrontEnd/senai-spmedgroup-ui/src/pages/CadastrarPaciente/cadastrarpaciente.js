import React,{Component} from 'react';
import Rodape from '../Componentes/Rodape';
import CabecalhoLogado from '../Componentes/CabecalhoLogado';
import Axios from 'axios';

class CadastrarPaciente extends Component{
    constructor(){
        super();
        this.state={
            id:"",
            idusuario:"",
            cpf:"",
            rg:"",
            endereço:"",
            dtnascimento:""
        }
    }
    cadastrarPaciente(event){
        event.preventDefault();
        let tokenP = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + tokenP
            }
        };
        Axios.post('http://localhost:5000/api/pacientes',{
            id:this.state.id,
            idusuario:this.state.idusuario,
            cpf:this.state.cpf,
            rg:this.state.rg,
            endereço:this.state.endereço,
            dtnascimento:this.state.dtnascimento
        },config)
        .then(data=>console.log(data))
        .catch(erro=>console.log(erro))
    }
    atualizaEstadoIdUsuario(event){
        this.setState({idusuario:event.target.value})
    }
    atualizaEstadoCpf(event){
        this.setState({cpf:event.target.value})
    }
    
    atualizaEstadoRg(event){
        this.setState({rg:event.target.value})
    }
    
    atualizaEstadoEndereço(event){
        this.setState({endereço:event.target.value})
    }
    
    atualizaEstadoData(event){
        this.setState({dtnascimento:event.target.value})
    }
    render(){
        return(
            <div>
                <CabecalhoLogado />
                
                <section className="cadastro">
                <h2>Cadastro
                <h2 style={{color:"#80e289",position:"relative",left:"0%"}}>
                 Pacientes
                </h2>
                </h2>
                <form onSubmit={this.cadastrarPaciente.bind(this)}>
                    <div className="item flexx">
                        <a>IDUSUARIO:</a>
                        <input type="text" value={this.state.idusuario} onChange={this.atualizaEstadoIdUsuario.bind(this)}/>
                        </div>
                    <div className="item flexx">
                        <a>CPF:</a>
                        <input type="text" value={this.state.cpf} onChange={this.atualizaEstadoCpf.bind(this)}/>
                        </div>
                    <div className="item flexx">
                        <a>RG:</a>
                        <input type="text" value={this.state.rg} onChange={this.atualizaEstadoRg.bind(this)}/>
                       </div>
                    <div className="item flexx">
                        <a>Endereço:</a>
                        <input type="text" value={this.state.endereço} onChange={this.atualizaEstadoEndereço.bind(this)}/>
                       
                    </div>
                    <div className="item flexx">
                        <a>Data Nascimento</a>
                        <input type="date" value={this.state.dtnascimento} onChange={this.atualizaEstadoData.bind(this)}/>
                       
                    </div>
                    <button type="submit">CADASTRAR</button>
                </form>
                </section>
               
            </div>
        );
    }
}
export default CadastrarPaciente;