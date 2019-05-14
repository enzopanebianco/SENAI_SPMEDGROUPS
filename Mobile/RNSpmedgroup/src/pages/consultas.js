import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import api from '../services/api';

class Consultas extends Component{
    static navigationOptions={
        header:null
    };
    constructor(props){
        super(props);
        this.state={
            lista:[]
        }
    }
        listar = async() =>{
            const resposta = await api.get("/agendamentos");
            const dados = resposta.data;
            this.setState({lista:dados});
    
        }
    componentDidMount(){
        this.listar();
    }    
    render(){
        return(
            <View>
            <View style={styles.Cabecalho}>
                <Text style={styles.CabTitulo}>SPMEDICAL
                
                <Text style={{color: '#80e289'}}>
                        GROUP
                </Text>
                </Text>
            </View>
          
                
            <View>
                <Text style={styles.titulo}>Consultas</Text>
            </View>
            <View>
                <FlatList 
                data={this.state.lista}
                keyExtractor={item=>item.id.toString()}
                renderItem={this.renderizaLista}
                />
            </View>
            </View>
        );
    }
    renderizaLista = ({item})=>{
        <View>
            <Text >{item.id}></Text>
            <Text>Paciente</Text>
            <Text >{item.idPaciente}></Text>
            <Text>Médico</Text>
            <Text >{item.idMedico}></Text>
            <Text>Data</Text>
            <Text >{item.dtAgendamento}></Text>
            <Text>Descrição</Text>
            <Text >{item.descricao}></Text>
            <Text>Situação</Text>
            <Text >{item.idsituacao}></Text>
        </View>
    }
}
const styles =  StyleSheet.create({
    Cabecalho:{
        height:70,
        fontStyle:"italic",
        borderRadius:100
    },
    CabTitulo:{
        color:"#80bdde",
        fontWeight:"100",
        fontFamily:"sans-serif-light",
        fontSize:25,
        textAlign:"center",
        marginTop:15,
        textShadowColor: '#f1f1f1',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    titulo:{
        color:"#333333",
        textAlign:"center",
        fontWeight:"100",
        position:"relative",
        left:155,
        height:30,
        width:100,
        fontSize:18,
        fontFamily:"roboto",
    },
    

});
export default Consultas;