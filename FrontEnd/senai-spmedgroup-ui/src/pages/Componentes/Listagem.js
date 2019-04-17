import React,{Component} from 'react';

function listagem (){

    
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
export default listagem;