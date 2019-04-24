import React,{Component} from 'react';
import Axios from 'axios';
import Cabecalho from '../Componentes/Cabecalho' 
import Rodape from '../Componentes/Rodape';

class AtualizarConsulta extends Component{
    constructor(){
        super();
        this.state={
            lista:[],
            idPaciente:"",
            idMedico:"",
            dtAgendamento:"",
            descricao:"",
            idsituacao:""
        }
        this.atualizaIdPacienteForm=this.atualizaIdPaciente.bind(this);
        this.atualizaIdMedicoForm=this.atualizaIdMedico.bind(this);
        this.atualizaDataForm=this.atualizaData.bind(this);
        this.atualizaDescricaoForm=this.atualizaDescricao.bind(this);
        this.atualizaIdForm=this.atualizaId.bind(this);
        this.atualizaIdSituacaoForm=this.atualizaIdSituacao.bind(this);
    }
    atualizaIdPaciente(event){
        this.setState({idPaciente:event.target.value})
    }
    atualizaId(event){
        this.setState({id:event.target.value})
    }
    atualizaIdMedico(event){
        this.setState({idMedico:event.target.value})
    }
    atualizaData(event){
        this.setState({dtAgendamento:event.target.value})
    }
    atualizaDescricao(event){
        this.setState({descricao:event.target.value})
    }
    atualizaIdSituacao(event){
        this.setState({idSituacao:event.target.value})
    }
    AtualizarConsulta(event){
        event.preventDefault();
        
        let tokenA = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + tokenA
            }
        };
        Axios.put('http://localhost:5000/api/agendamentos',{
            id:this.state.id,
            idPaciente:this.state.idPaciente,
            idMedico:this.state.idMedico,
            dtAgendamento:this.state.dtAgendamento,
            descricao:this.state.descricao,
            idSituacao:this.state.idSituacao
        },config
        )
        .then(data=>console.log(data))
        .catch(erro=>console.log(erro))
        alert("editado");
    }
    render(){
        return(
            <div>
             
                <h2>Atualizar</h2>
                <section id="campo-editar">
                        <h2>Editar</h2>
                        <form onSubmit={this.AtualizarConsulta.bind(this)}>
                        <div className="item">
                        id da consulta
                        <input type="text" value={this.state.id} onChange={this.atualizaIDForm} />
                        </div>
                        <div className="item">
                            <a>idPaciente</a>
                            <input type="text" value={this.state.idPaciente} onChange={this.atualizaIdPacienteForm} />
                        </div>
                        
                        <div className="item">
                            <a>idMedico</a>
                            <input type="text" value={this.state.idMedico} onChange={this.atualizaIdMedicoForm} />
                        </div>
                        
                        <div className="item">
                            <a>data</a>
                            <input type="date" value={this.state.dtAgendamento} onChange={this.atualizaDataForm} />
                        </div>
                        
                        <div className="item">
                            <a>Descricao</a>
                            <input type="text" value={this.state.descricao} onChange={this.atualizaDescricaoForm} />
                        </div>
                            <div className="item">
                            <select  value={this.state.idSituacao} onChange={this.atualizaIdSituacaoForm}>
                                <option value="1" className="agendada">Agendada</option>
                                <option value="2" className="realizada">Realizada</option>
                                <option value="3" className="cancelada">Cancelada</option>
                            </select></div>
                            <button type="submit">ATUALIZAR</button>
                        </form>
                    </section>
            </div>
        );
    }
}
export default AtualizarConsulta;