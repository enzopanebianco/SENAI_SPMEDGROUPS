import React,{Component} from 'react';
import Axios from 'axios';
import Cabecalho from '../Componentes/Cabecalho' 
import Rodape from '../Componentes/Rodape';
import Listagem from '../Componentes/Listagem';
import '../../assets/CSS/list.css';

class TodasConsultas extends Component{
    constructor(){
        super();
        this.state={
            lista:[],
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
        this.ListarPaciente();
    }
    render(){
        return(
            <div>
                <Cabecalho />
               
                <section className="list">
                <h2>ListarTodas</h2>
                <table>
                    
                        <Listagem />
                  
                           <tbody className="tb">{
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
                   
                    </tbody>
                </table>
                </section>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <section className="cadastro">
                <h2>CADASTRAR</h2>
                <form onSubmit={this.cadastrarConsultas.bind(this)}>
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
                        <input type="text" value={this.state.dtAgendamento} onChange={this.atualizaDataForm} />
                    </div>
                    
                    <div className="item">
                        <a>Descricao</a>
                        <input type="text" value={this.state.descricao} onChange={this.atualizaDescricaoForm} />
                    </div>
                    
                    <div className="item">
                    <a>idsituacao</a>
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