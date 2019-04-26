import React,{Component} from 'react';
import Axios from 'axios';
import Cabecalho from '../Componentes/Cabecalho' 
import Rodape from '../Componentes/Rodape';
import Listagem from '../Componentes/Listagem';
import { Link } from 'react-router-dom';
import '../../assets/CSS/list.css';
import {decode} from '../../services/auth'
class TodasConsultas extends Component{
    
    constructor(){
        super();
        this.state={
            lista:[],
            id:"",
            listaP:[],
            idPaciente:"",
            listaM:[],
            idMedico:"",
            dtAgendamento:"",
            descricao:"",
            idsituacao:""
        }
        this.atualizaIdPacienteForm=this.atualizaIdPaciente.bind(this);
        this.atualizaIdMedicoForm=this.atualizaIdMedico.bind(this);
        this.atualizaDataForm=this.atualizaData.bind(this);
        this.atualizaDescricaoForm=this.atualizaDescricao.bind(this);
        this.atualizaIDForm=this.atualizaID.bind(this);
        this.atualizaIdSituacaoForm=this.atualizaIdSituacao.bind(this);
        }
    ListarPaciente(){
        Axios.get('http:localhost:5000/api/pacientes')
        .then(data=>{
            console.log(data)
            this.setState({listaP:data.data});
        })
        .catch(erro=>console.log(erro))
    }
    AtualizarConsulta(event){
        event.preventDefault();
        
        let tokenAtu = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + tokenAtu
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
    atualizaID(event){
        this.setState({id:event.target.value})
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
        this.buscarpaciente();
        this.buscarmedico();
        this.listartodas();
        console.log(decode());
       
        
    }
    buscarpaciente(){
        Axios.get('http://localhost:5000/api/pacientes')
        .then(resposta=>{
            const pacientes = resposta.data;
            this.setState({listaP:pacientes});
        })
        console.log(this.listaP);
    }
    buscarmedico(){
        Axios.get('http://localhost:5000/api/medicos')
        .then(resposta=>{
            const medicos = resposta.data;
            this.setState({listaM:medicos});
        })
        console.log(this.listaM);
    }
    render(){
      
       
        return(
            <div>
                <Cabecalho />
                <div className="titulo">
               <h2>Consultas</h2>
               </div>
                <section className="list">
              
                <table>
                    
                        <Listagem />
                  
                           <tbody className="corpo">{
                        this.state.lista.map(function(consulta){
                            return(
                                <tr key={consulta.id}>
                                <td className="id">{consulta.id}</td>
                                <td className="flex-list-td paci">{consulta.idPacienteNavigation.idUsuarioNavigation.nome}</td>   
                                <td className="medi flex-list-td">{consulta.idMedicoNavigation.idUsuarioNavigation.nome}</td>
                                <td className="dat flex-list-td" value="date">{consulta.dtAgendamento}</td>
                                <td className="descri flex-list-td">{consulta.descricao}</td>
                                <td className="situ flex-list-td">{consulta.idSituacao}
                                    <div className="edit">
                                    <li><Link to="/consultas/${id}"><a>Editar</a></Link></li>
                                    </div>
                                <hr/>
                                </td>
                            </tr>
                            );
                        })
                    }
                   
                    </tbody>
                </table>
                </section>
               
                  <br/>
                    <section className="cadastro">
                    <h2>CADASTRAR</h2>
                    <form onSubmit={this.cadastrarConsultas.bind(this)}>
                    <div className="item">
                        <a>Paciente</a>
                        <select value={this.state.idpaciente} onChange={this.atualizaIdPacienteForm}>
                        <option value="0">Selecione</option>{
                            this.state.listaP.map((element)=>{
                                return <option key={element.id} value={element.id}>{element.idUsuarioNavigation.nome}</option>
                            })
                        }
                    </select>
                    </div>
                    
                    <div className="item">
                        <a>Médico</a>
                        <select value={this.state.idMedico} onChange={this.atualizaIdMedicoForm}>
                        <option value="0">Selecione</option>{
                            this.state.listaM.map((element)=>{
                                return <option key={element.id} value={element.id}>{element.idUsuarioNavigation.nome}</option>
                            })
                        }
                    </select>
                    </div>
                    
                    <div className="item">
                        <a>data</a>
                        <input type="date" value={this.state.dtAgendamento} onChange={this.atualizaDataForm} />
                    </div>
                    
                    <div className="item">
                        <a>Descrição</a>
                        {/* <input type="text" value={this.state.descricao} onChange={this.atualizaDescricaoForm} /> */}
                        <textarea type="text" value={this.state.descricao} onChange={this.atualizaDescricaoForm} placeholder="insira uma descrição"></textarea>
                    </div>
                    
                    <div className="item">
                    <a>Situação</a>
                        <select value={this.state.idSituacao} onChange={this.atualizaIdSituacaoForm}>
                            <option value="1" className="agendada">Agendada</option>
                            <option value="2" className="realizada">Realizada</option>
                            <option value="3" className="cancelada">Cancelada</option>
                        </select>
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
                </section>
                <Rodape />  
            </div>
        );
    }
}
export default TodasConsultas; 