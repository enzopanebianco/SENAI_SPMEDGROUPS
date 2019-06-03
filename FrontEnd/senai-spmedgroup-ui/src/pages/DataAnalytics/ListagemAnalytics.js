import React,{Component} from 'react';
import firebase from '../../services/firebase';
import Cabecalho from '../Componentes/Cabecalho';   

export default class ListagemAnalytics extends Component{
    constructor(){
        super();
        this.state={
            listaAnalytics:[]
        }
    }
    listar(){
        firebase.firestore().collection("analytics")
        .get()
        .then((analytics)=>
        {
            let analyticsArray = [];
            analytics.forEach((analytic)=>
            {
                analyticsArray.push({
                    id:analytic.id,
                    latitude:analytic.data().latitude,
                    longitude:analytic.data().longitude,
                    descricao:analytic.data().descricao,
                    especialidade:analytic.data().especialidade,
                    idade:analytic.data().idade
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
                <Cabecalho />
                Listagem
                {
                    this.state.listaAnalytics.map(list=>{
                        return(
                        <li key={list.id}>
                            {list.latitude}-
                            {list.longitude}-
                            {list.descricao}-
                            {list.idade}-
                            {list.especialidade}
                        </li>
                        );
                    })
                }
            </div>
        );
    }
}