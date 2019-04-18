import React,{Component} from 'react';
import Axios from 'axios';
import Listagem from '../Componentes/Listagem';
import {logofundo} from '../../assets/imagens/Ativo 1.png';

import {decode} from '../../services/auth';

class ConsultasPacientes extends Component{
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
    listarConsultas(){
        let jwtdecode = require('jwt-decode');
        let decode = jwtdecode(localStorage.getItem("spmed-usuario"));
        let nomePaciente = decode.nome;
        
        this.setState({idPaciente:nomePaciente});
        console.log(decode.nome);    
        console.log(decode);
        let tokenP = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + tokenP
            }
        };
        Axios.get('http://localhost:5000/api/agendamentos/pacientes',config)
            .then(data=>{
                console.log(data);
                this.setState({lista:data.data});
               
            })
            .catch(erro=>console.log(erro)) 
        
        }
       
    componentDidMount(){
        console.log(decode());
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
export default ConsultasPacientes;