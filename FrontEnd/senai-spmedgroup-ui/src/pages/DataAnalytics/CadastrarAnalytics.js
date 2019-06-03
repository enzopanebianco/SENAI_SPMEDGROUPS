import React, { Component } from 'react';
import firebase from '../../services/firebase';

export default class CadastrarAnlytics extends Component {
    constructor() {
        super();
        this.state = {
            
            latitude: "",
            longitude: "",
            descricao: "",
            idade: "",
            especialidade: ""
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
                especialidade: this.state.especialidade
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
    render() {
        return (
            <div>
                <h2>Pesquisa</h2>
                <form onSubmit={this.cadastrar.bind(this)}>
                    <div>
                        <label>latitude</label>
                        <input type="text" name="latitude" value={this.state.latitude} onChange={this.atualizaEstado.bind(this)} />
                    </div>
                    <div>
                        <label>longitude</label>
                        <input type="text" name="longitude" value={this.state.longitude} onChange={this.atualizaEstado.bind(this)} />
                    </div>
                    <div>
                        <label>descricao</label>
                        <input type="text" name="descricao" value={this.state.descricao} onChange={this.atualizaEstado.bind(this)} />
                    </div>
                    <div>
                        <label>idade</label>
                        <input type="number" name="idade" value={this.state.idade} onChange={this.atualizaEstado.bind(this)} />
                    </div>
                    <div>
                        <label>especialidade</label>
                        <input type="text" name="especialidade" value={this.state.especialidade} onChange={this.atualizaEstado.bind(this)} />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}