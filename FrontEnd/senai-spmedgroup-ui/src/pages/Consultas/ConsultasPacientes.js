import React,{Component} from 'react';
import Axios from 'axios';
import Listagem from '../Componentes/Listagem';
import { Link } from 'react-router-dom';
import {Pesquisinha,Texto,LL} from './styles';
import Cabecalho from '../Componentes/Cabecalho'; 
import Rodape from '../Componentes/Rodape';
import '../../assets/CSS/list.css';
class ConsultasPacientes extends Component{
    constructor(){
        super();
        this.state={
            lista:[],
            idPaciente:"",
            idMedico:"",
            dtAgendamento:"",
            descricao:"",
            idsituacao:"",
            nome:""
        }
    }
   
     listarConsultas(){
         let tokenP = localStorage.getItem("spmed-usuario");
         var config = {
             headers: {
                 'Content-Type' : 'application/json',
                 'Authorization': "bearer " + tokenP
             }
         };
         Axios.get('http://192.168.3.48:5000/api/agendamentos/usuarios',config)
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
              <Cabecalho />
              <div className="titulo">
               <h2>Consultas</h2>
               
               </div>
              <section className="list">
                         <table>
                          <Listagem />
                           <tbody className="corpo">
                          
                           {
                               this.state.lista.map(function(consulta){
                                   return(
                            <tr key={consulta.id}>
                               <td className="id">{consulta.id}</td>
                                 <td className="flex-list-td paci">{consulta.idPacienteNavigation.idUsuarioNavigation.nome}</td>   
                                <td className="medi flex-list-td">{consulta.idMedicoNavigation.idUsuarioNavigation.nome}</td>
                                <td className="dat flex-list-td" value="date">{consulta.dtAgendamento}</td>
                                <td className="descri flex-list-td">{consulta.descricao}</td>
                                <td className="situ flex-list-td">{consulta.idSituacaoNavigation.nome}</td>
                            </tr>
                            );
                        })
                    }
                    
                    </tbody>
                </table>
                    </section>
            </div>
        );
    }

}
export default ConsultasPacientes;