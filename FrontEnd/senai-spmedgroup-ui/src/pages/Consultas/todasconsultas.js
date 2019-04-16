import React,{Component} from 'react';
import Axios from 'axios';

class TodasConsultas extends Component{
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
    
        this.atualizaIdSituacaoForm=this.atualizaIdSituacao.bind(this);
        }
    
    cadastrarConsultas(event){
        event.preventDefault();
        
        let tokenn = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + tokenn
            }
        };
        
        Axios.post('http://localhost:5000/api/agendamentos',{
            idPaciente:this.state.idPaciente,
            idMedico:this.state.idMedico,
            dtAgendamento:this.state.dtAgendamento,
            descricao:this.state.descricao,
            idSituacao:this.state.idSituacao
        },config)
        .then(data=>console.log(data))
        .catch(erro=>console.log(erro))
    }
    listartodas(){
        let tokenL = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + tokenL
            }
        };
        Axios.get('http://localhost:5000/api/agendamentos',config)
        .then(data=>{
            console.log(data)
            this.setState({lista:data.data});
        })
        .catch(erro=>console.log(erro))
        
    }
    atualizaIdPaciente(event){
        this.setState({idPaciente:event.target.value})
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
    componentDidMount(){
        this.listartodas();
    }
    render(){
        return(
            <div>
                <h2>Listar Todas</h2>
                <table>
                    <thead>
                        <tr>
                        <th>Paciente</th>
                        <th>Médico</th>
                        <th>Data</th>
                        <th>Descricao</th>
                        <th>Situacao</th>
                        </tr>
                    </thead>
                           <tbody>{
                        this.state.lista.map(function(consulta){
                            return(
                                <tr key={consulta.id}>
                                
                                <td>{consulta.idPaciente}</td>
                                <td>{consulta.idMedico}</td>
                                <td>{consulta.dtAgendamento}</td>
                                <td>{consulta.descricao}</td>
                                <td>{consulta.idSituacao}</td>
                            </tr>
                            );
                        })
                    }
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </tbody>
                </table>
                <h2>CADASTRAR</h2>
                <form onSubmit={this.cadastrarConsultas.bind(this)}>
                    <div>
                        idPaciente
                        <input type="text" value={this.state.idPaciente} onChange={this.atualizaIdPacienteForm} />
                    </div>
                    
                    <div>
                        idMedico
                        <input type="text" value={this.state.idMedico} onChange={this.atualizaIdMedicoForm} />
                    </div>
                    
                    <div>
                        data
                        <input type="text" value={this.state.dtAgendamento} onChange={this.atualizaDataForm} />
                    </div>
                    
                    <div>
                        Descricao
                        <input type="text" value={this.state.descricao} onChange={this.atualizaDescricaoForm} />
                    </div>
                    
                    <div>
                        idsituacao
                        <select value={this.state.idSituacao} onChange={this.atualizaIdSituacaoForm}>
                            <option value="1">Agendada</option>
                            <option value="2">Realizada</option>
                            <option value="3">Cancelada</option>
                        </select>
                    </div>
                    <button type="submit">CADASTRAR</button>
                </form>
            </div>
        );
    }
}
export default TodasConsultas; 