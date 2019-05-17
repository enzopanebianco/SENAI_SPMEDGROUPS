import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,AsyncStorage,Image} from 'react-native';
import jwt from 'jwt-decode';
import api from '../services/api';

class Consultas extends Component{
    static navigationOptions={
        header:null
    };
    constructor(props){
        super(props);
        this.state={
            lista:[],
            nome:"",
            token:""
        }
    }
    buscar = async()=>{
        const value= await AsyncStorage.getItem("spmed");
        this.setState({nome:jwt(value).nome});
        this.setState({token:value});
        return(jwt(value).tipo);
      
    }
        listar = async() =>{
            const value= await AsyncStorage.getItem("spmed");
           
            var config= {
                headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+value}
            };
            const resposta = await api.get("/agendamentos/usuarios",config);
                
              
            const dados = resposta.data;
           
            this.setState({lista:dados});       
        }
    componentDidMount(){
        this.listar();
       
        this.buscar();
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
                <Text style={styles.NomeUsuario}>{this.state.nome}</Text>
                
            </View>
         
                
            <View>
                <Text style={styles.titulo}>CONSULTAS</Text>
            </View>
            
                <FlatList 
                data={this.state.lista}
                keyExtractor={item=>item.id.toString()}
                renderItem={this._renderizaLista}
                
                />
            
            </View>
        );
        
      
    }
    _renderizaLista = ({item}) =>(
        <View style={styles.Getlist}>
            <View>
            <Text >Paciente</Text>
            <Text style={{fontWeight:"300",color:"black"}} >{item.idPacienteNavigation.idUsuarioNavigation.nome}</Text>
            </View>
            <View style={styles.medico}>
            <Text >Médico</Text>
            <Text style={{fontWeight:"300",color:"black"}} >{item.idMedicoNavigation.idUsuarioNavigation.nome}</Text>
            </View>
            <View style={styles.data}>
            <Text >Data</Text>
            <Text style={{fontWeight:"300",color:"black"}} >{item.dtAgendamento}</Text>
            </View>
            <View style={styles.situacao}>
            <Text  >Situação</Text>
            <Text style={{fontWeight:"300",color:"black",position:"relative",bottom:20}} >{item.idSituacaoNavigation.nome}</Text>
            </View>
            <View style={styles.descricao}>
            <Text style={{textAlign:"center"}} >Descrição</Text>
            <Text style={{fontWeight:"300",color:"black",textAlign:"center"}}>{item.descricao}</Text>
            </View>
        </View>
    );
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
        textAlign:"left",
        marginLeft:15,
        marginTop:15,
        textShadowColor: '#f1f1f1',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    titulo:{
        color:"#80aade",
        textAlign:"center",
        fontWeight:"bold",
        position:"relative",
        left:155,
        height:30,
        width:120,
        fontSize:18,
        fontFamily:"roboto",
    },
   
    Getlist:{
        marginTop:30,
        flexDirection:"row",
        backgroundColor:"white",
        height:200,
        backgroundColor:"#F1FAFF",
    },
    data:{
        position:"relative",
        left:50
        
    },
    descricao:{
        position:"relative",
        top:70,
        right:50,
        backgroundColor:"#fdfdfd",
        width:100,
        height:80,
        borderBottomColor:"#80bdde",
        borderBottomWidth:2,
      
    },
    situacao:{
        position:"relative",
        left:90
    },
    medico:{
        position:"absolute",
        top:50,
        left:0,
    },
    NomeUsuario:{
        position:"absolute",
        right:15,
        top:20,
        width:100,
        color:"white",
        textAlign:"center",
        backgroundColor:"#80aade",
    },
    img:{
        width:40,
        height:40,
        position:"absolute",
        zIndex:-1,
        top:41,
        right:15,
        display:"none",
        opacity:0.5
    },

});
export default Consultas;