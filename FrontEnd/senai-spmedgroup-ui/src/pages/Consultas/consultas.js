import React,{Component} from 'react';


class Consultas extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         lista:[],
    //         idPaciente:"",
    //         idMedico:"",
    //         dtAgendamento:"",
    //         descricao:"",
    //         idsituacao:""
    //     }
    // }
    // buscarNome(){
    //     let jwtdecode = require('jwt-decode');
    //     let decode = jwtdecode(localStorage.getItem("spmed-usuario"));
    //     let nomePaciente = decode.nomePaciente;
    //     this.setState({idPaciente:nomePaciente});
    // }
    render(){
        return(
            <div>
                {/* <table>
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
                </table> */}s
            </div>
        );

    }
}
export default Consultas;