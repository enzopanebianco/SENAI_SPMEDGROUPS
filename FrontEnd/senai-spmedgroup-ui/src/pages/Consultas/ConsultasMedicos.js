import React,{Component} from 'react';
import Axios from 'axios';
import Listagem from '../Componentes/Listagem';


class ConsultasMedicos extends Component{
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
    }
    buscarNome(){
        let jwtdecode = require('jwt-decode');
        let decode = jwtdecode(localStorage.getItem("spmed-usuario"));
        let nomePaciente = decode.nomePaciente[2];
        this.setState({idPaciente:nomePaciente[2]});
        console.log(this.nomePaciente);    
    }
    listarConsultas(){
        let tokenM = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + tokenM
            }
        };
        Axios.get('http://localhost:5000/api/agendamentos/medicos',config)
            .then(data=>{
                console.log(data);
                this.setState({lista:data.data});
            })
            .catch(erro=>console.log(erro)) 
    }
    componentDidMount(){
        this.listarConsultas();
    }
    render(){
        return(
            <div>
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
                    
                    </tbody>
                </table>
            </div>
        );

    }
}
export default ConsultasMedicos;