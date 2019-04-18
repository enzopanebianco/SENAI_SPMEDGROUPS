import React,{Component} from 'react';
import Rodape from '../Componentes/Rodape';
import Cabecalho from '../Componentes/Cabecalho';
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
            tg:this.state.rg,
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
                <Cabecalho />
                <form onSubmit={this.cadastrarPaciente.bind(this)}>
                    <div className="_item_">
                        <a>IDUSUARIO:</a>
                        </div>
                        <input type="text" value={this.state.idusuario} onChange={this.atualizaEstadoIdUsuario.bind(this)}/>
                    <div className="_item_">
                        <a>CPF:</a>
                        <input type="text" value={this.state.cpf} onChange={this.atualizaEstadoCpf.bind(this)}/>
                        </div>
                    <div className="_item_"></div>
                        <a>RG</a>
                        <input type="text" value={this.state.rg} onChange={this.atualizaEstadoRg.bind(this)}/>
                       
                    <div className="_item_">
                        <a>Endereço:</a>
                        <input type="text" value={this.state.endereço} onChange={this.atualizaEstadoEndereço.bind(this)}/>
                       
                    </div>
                    <div className="_item_">
                        <a>Data Nascimento:</a>
                        <input type="text" value={this.state.dtnascimento} onChange={this.atualizaEstadoData.bind(this)}/>
                       
                    </div>
                    <button type="submit">CADASTRAR</button>
                </form>
                <Rodape />
            </div>
        );
    }
}
export default CadastrarPaciente;