import React, { Component } from 'react';
import firebase from '../../services/firebase';
import {TituloCadastrar,ContainerFlex,CampoCadastro,CampoLabel,TextLabel,Input,BotaoCadastrar,Seletor} from './style';
import imgpesquisa from '../../assets/imagens/imgpesquisa.jpg'
import Rodape from '../Componentes/Rodape';
import api from '../../services/auth';
import CabecalhoLogado from '../Componentes/CabecalhoLogado';

export default class CadastrarAnlytics extends Component {
    constructor() {
        super();
        this.state = {
            
            latitude: "",
            longitude: "",
            descricao: "",
            idade: "",
            listaE:[],
            listaP:[],
            idespecialidade: "",
            idpaciente:""
        }
    }
    cadastrar(event) {
        event.preventDefault();
        firebase.firestore().collection("analytics")
            .add({
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                descricao: this.state.descricao,
                idade: this.state.idade,
                idespecialidade: this.state.idespecialidade,
                idpaciente: this.state.idpaciente,
            })
            .then(()=>{
                alert("Muito Obrigado")
            })
            .catch((erro)=>{
                console.log("erro",erro)
            })
    }
    atualizaEstado(event){
        this.setState({[event.target.name] : event.target.value});
    }
    buscarpaciente(){
        api.get("pacientes")
        .then(resposta=>{
            const pacientes = resposta.data;
            this.setState({listaP:pacientes});
        })
        console.log(this.listaP);
    }
    buscarespecialidade(){
        api.get("especialidades")
        .then(resposta=>{
            const especialidades = resposta.data;
            this.setState({listaE:especialidades})
        })
    }
    componentDidMount(){
        this.buscarespecialidade();
        this.buscarpaciente();
    }
    render() {
        return (
            <div>
                <CabecalhoLogado />
                <ContainerFlex>
                <div>
                <img src={imgpesquisa} style={{height:"497px",width:"700px",background:"blue",opacity:0.8}} />
                </div>
                <div style={{position:"relative",left:"0%"}}>
                <TituloCadastrar>CONSULTAS DESCRIÇÕES</TituloCadastrar>
                <CampoCadastro onSubmit={this.cadastrar.bind(this)}>
                    <CampoLabel>
                        <TextLabel>Latitude</TextLabel>
                        <Input type="text" name="latitude" value={this.state.latitude} onChange={this.atualizaEstado.bind(this)} />
                    </CampoLabel>
                    <CampoLabel>
                        <TextLabel>Longitude</TextLabel>
                        <Input type="text" name="longitude" value={this.state.longitude} onChange={this.atualizaEstado.bind(this)} />
                    </CampoLabel>
                    <CampoLabel>
                        <TextLabel>Descrição</TextLabel>
                        <Input type="text" name="descricao" value={this.state.descricao} onChange={this.atualizaEstado.bind(this)} />
                    </CampoLabel>
                    <CampoLabel>
                        <TextLabel>Idade</TextLabel>
                        <Input type="number" name="idade" value={this.state.idade} onChange={this.atualizaEstado.bind(this)} />
                    </CampoLabel>
                    <CampoLabel>
                        <TextLabel>Especialidade do Médico</TextLabel>
                        <Seletor name="idespecialidade" value={this.state.especialidade} onChange={this.atualizaEstado.bind(this)}>
                        <option value="0">Selecione</option>{
                            this.state.listaE.map((element)=>{
                                return <option key={element.id} value={element.nome}>{element.nome}</option>
                            })
                        }
                    </Seletor>

                    </CampoLabel>
                    <CampoLabel>
                        <TextLabel>Paciente</TextLabel>
                        <Seletor name="idpaciente" value={this.state.pacientes} onChange={this.atualizaEstado.bind(this)}>
                        <option value="0">Selecione</option>{
                            this.state.listaP.map((element)=>{
                                return <option key={element.id} value={element.idUsuarioNavigation.nome}>{element.idUsuarioNavigation.nome}</option>
                            })
                        }
                        </Seletor>
                    </CampoLabel>
                    <BotaoCadastrar type="submit">Enviar</BotaoCadastrar>
                </CampoCadastro>
                </div>
                </ContainerFlex>
                <Rodape />
            </div>
        );
    }
}