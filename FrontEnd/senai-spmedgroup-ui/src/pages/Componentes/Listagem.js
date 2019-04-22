import React,{Component} from 'react';
import logofundo from '../../assets/imagens/logofundo.png';
function listagem (){

    
    return(
        <div>
           <section className="_list">
           <thead className="th">
                        <tr>
                        <th>Paciente</th>
                        <th>Médico</th>
                        <th>Data</th>
                        <th>Descricao</th>
                        <th>Situacao</th>
                        </tr>
                    </thead>
            </section>
                    <img src={logofundo} alt="logo da empresa"/>
        </div>
    );
}
export default listagem;