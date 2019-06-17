import React,{Component} from 'react';
import '../../assets/CSS/list.css';
import logofundo from '../../assets/imagens/logofundo.png';
function listagem (){

    
    return(
        <div>
            
           <section className="_list">
           <thead className="th">
                        <tr>
                        <th className="flex-list">ID</th>
                        <th className="flex-list">Paciente</th>
                        <th className="flex-list">Médico</th>
                        <th className="flex-list">Data</th>
                        <th className="flex-list">Descrição</th>
                        <th className="flex-list">Situação</th>
                        </tr>
                    </thead>
            </section>
                    {/* <img src={logofundo} alt="logo da empresa"/> */}
        </div>
    );
}
export default listagem;