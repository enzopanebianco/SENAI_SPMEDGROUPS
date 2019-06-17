import React, { Component } from 'react';
import api from '../../services/auth'
import Cabecalho from '../Componentes/Cabecalho'
import Rodape from '../Componentes/Rodape';
import Listagem from '../Componentes/Listagem';
class AtualizarConsulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            id: "",
            idPaciente: "",
            idMedico: "",
            dtAgendamento: "",
            descricao: "",
            idsituacao: ""
        }
        this.atualizaIdPacienteForm = this.atualizaIdPaciente.bind(this);
        this.atualizaIdMedicoForm = this.atualizaIdMedico.bind(this);
        this.atualizaDataForm = this.atualizaData.bind(this);
        this.atualizaDescricaoForm = this.atualizaDescricao.bind(this);
        this.atualizaIdForm = this.atualizaId.bind(this);
        this.atualizaIdSituacaoForm = this.atualizaIdSituacao.bind(this);
    }
    atualizaIdPaciente(event) {
        this.setState({ idPaciente: event.target.value })
    }
    atualizaId(event) {
        this.setState({ id: event.target.value })
    }
    atualizaIdMedico(event) {
        this.setState({ idMedico: event.target.value })
    }
    atualizaData(event) {
        this.setState({ dtAgendamento: event.target.value })
    }
    atualizaDescricao(event) {
        this.setState({ descricao: event.target.value })
    }
    atualizaIdSituacao(event) {
        this.setState({ idSituacao: event.target.value })
    }
    AtualizarConsulta(event) {
        event.preventDefault();

        let tokenA = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer " + tokenA
            }
        };
        api.put('agendamentos', {
            id: this.state.id,
            idPaciente: this.state.idPaciente,
            idMedico: this.state.idMedico,
            dtAgendamento: this.state.dtAgendamento,
            descricao: this.state.descricao,
            idSituacao: this.state.idSituacao
        }, config
        )
            .then(data => console.log(data))
            .catch(erro => console.log(erro))
        alert("editado");
    }
    listar() {
        let tokenLi = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer " + tokenLi
            }
        };

        api.get('agendamentos/' + this.state.id, config)
            .then(data => {
                console.log(data)
                this.setState({ lista: data.data });
            })
            .catch(erro => console.log(erro))

    }
    componentDidMount() {
        // const { match: { params } } = this.props.id;
        // console.log(params.id);

        // // const a = ({ match }) => { console.log(match.params.id) };
        
        // api.get(`agendamentos/${params}`)
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(erro=>console.log(erro));
        // // this.listar();
    }
    render() {
        return (
            <div>
                <table>

                    <Listagem />

                    <tbody className="corpo">{
                        this.state.lista.map(function (consulta) {
                            return (
                                <tr key={consulta.id}>
                                    <td className="id">{consulta.id}</td>
                                    <td className="flex-list-td paci">{consulta.idPacienteNavigation.idUsuarioNavigation.nome}</td>
                                    <td className="medi flex-list-td">{consulta.idMedicoNavigation.idUsuarioNavigation.nome}</td>
                                    <td className="dat flex-list-td">{consulta.dtAgendamento}</td>
                                    <td className="descri flex-list-td">{consulta.descricao}</td>
                                    <td className="situ flex-list-td">{consulta.idSituacao}

                                    </td>
                                </tr>
                            );
                        })
                    }

                    </tbody>
                </table>
                <h2>Atualizar</h2>
                <section id="campo-editar">
                    <h2>Editar</h2>
                    <form onSubmit={this.AtualizarConsulta.bind(this)}>
                        <div className="item">
                            id da consulta
                        <input type="text" value={this.state.id} onChange={this.atualizaIDForm} />
                        </div>
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
                            <input type="date" value={this.state.dtAgendamento} onChange={this.atualizaDataForm} />
                        </div>

                        <div className="item">
                            <a>Descricao</a>
                            <input type="text" value={this.state.descricao} onChange={this.atualizaDescricaoForm} />
                        </div>
                        <div className="item">
                            <select value={this.state.idSituacao} onChange={this.atualizaIdSituacaoForm}>
                                <option value="1" className="agendada">Agendada</option>
                                <option value="2" className="realizada">Realizada</option>
                                <option value="3" className="cancelada">Cancelada</option>
                            </select></div>
                        <button type="submit">ATUALIZAR</button>
                    </form>
                </section>
            </div>
        );
    }
}
export default AtualizarConsulta;