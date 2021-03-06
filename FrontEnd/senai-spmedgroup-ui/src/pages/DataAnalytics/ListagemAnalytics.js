import React,{Component} from 'react';
import firebase from '../../services/firebase';
import CabecalhoLogado from '../Componentes/CabecalhoLogado';   
import {Container,Titulo,Tabela,TabelaH,TabelaR} from './style'

export default class ListagemAnalytics extends Component{
    constructor(){
        super();
        this.state={
            listaAnalytics:[]
        }
    }
    listar(){
        firebase.firestore().collection("analytics")
        .onSnapshot((analytics)=>
        {
            let analyticsArray = [];
            analytics.forEach((analytic)=>
            {
                analyticsArray.push({
                    id:analytic.id,
                    latitude:analytic.data().latitude,
                    longitude:analytic.data().longitude,
                    descricao:analytic.data().descricao,
                    idespecialidade:analytic.data().idespecialidade,
                    idade:analytic.data().idade,
                    idpaciente:analytic.data().idpaciente
                })
            })
           
            this.setState({listaAnalytics:analyticsArray},()=>{
                console.log(this.state.listaAnalytics)
            })
        }
        )

    }
    componentDidMount(){
        this.listar();
    }
    render(){
        return(
            <div>

                <CabecalhoLogado />
                <Container>
                <Titulo>
                Analytics
                </Titulo>
                <Tabela>
                <TabelaH>
                    <tr >
                        <th style={{fontWeight:"lighter"}}className="flex-Content">LATITUDE</th>
                        <th style={{fontWeight:"lighter"}}className="flex-Content">LONGITUDE</th>
                        <th style={{fontWeight:"lighter"}}className="flex-Content">DOENÇA/DESCRIÇÃO</th>
                        <th style={{fontWeight:"lighter"}}className="flex-Content">IDADE</th>
                        <th style={{fontWeight:"lighter"}}className="flex-Content">ESPECIALIDADE DO MÉDICO</th>
                        <th style={{fontWeight:"lighter"}}className="flex-Content">PACIENTES</th>
                    </tr>
                </TabelaH>
                <tbody>
                {
                    this.state.listaAnalytics.map(list=>{
                        return(
                        <TabelaR key={list.id}>
                            <td className="lati">{list.latitude}</td>
                            <td>{list.longitude}</td>
                            <td>{list.descricao}</td>
                            <td>{list.idade}</td>
                            <td>{list.idespecialidade}</td>
                            <td>{list.idpaciente}</td>
                        </TabelaR>
                        );
                    })
                }
                </tbody>
                </Tabela>
                </Container>
                
            </div>
        );
    }
}