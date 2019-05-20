import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,AsyncStorage,Image,StatusBar} from 'react-native';
import jwt from 'jwt-decode';
import api from '../services/api';
import { SafeAreaView } from 'react-navigation';

class Consultas extends Component{
    static navigationOptions={
        header:null,    
    };
    constructor(props){
        super(props);
        this.state={
            lista:[],
            nome:"",
            token:"",
        }
    }
    sair=async()=>{
      
        return  alert("Obrigado"),this.props.navigation.navigate("AuthStack");
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
        ListaVazia = () => {
            return (
              <View>
         
                <Image
                source={require("../assets/img/pranchetinha.png")}
                style={styles.img2}
            />
                <Text style={{textAlign: 'center',color:"#999999"}}>Nenhuma Consulta Ainda...</Text>
              </View>
         
            );
          }
        
    componentDidMount(){
        this.listar();
        
        this.buscar();
    }   
    render(){
      
            
        
        return(
            <SafeAreaView>
                
        <StatusBar translucent backgroundColor="white" barStyle="dark-content"/>
            <View style={styles.Cabecalho}>
                <Text style={styles.CabTitulo}>SPMEDICAL
                
                <Text style={{color: '#80e289'}}>
                        GROUP
                </Text>
                </Text>
                <Image
            source={require("../assets/img/icon.png")}
            style={styles.img}
            />
            <Text style={styles.NomeUsuario}>{this.state.nome}</Text>   
           
            <Text style={styles.exit} onPress={this.sair}>Sair</Text>        
            </View>
            <View>
                <Text style={styles.titulo}>CONSULTAS</Text>
            </View>
                <FlatList 
                data={this.state.lista}
                keyExtractor={item=>item.id.toString()}
                renderItem={this._renderizaLista}
                ListEmptyComponent={this.ListaVazia}
                showsVerticalScrollIndicator={false}
                vertical={true}
                />
            
            </SafeAreaView>
        );
        
      
    }
    _renderizaLista = ({item}) =>(
        <View style={styles.Getlist}>
        
            <View>
            <Text >Paciente</Text>
            <Text style={{fontWeight:"300",color:"black"}} >{item.idPacienteNavigation.idUsuarioNavigation.nome}</Text>
            </View>
            <View style={styles.medico} >
            <Text >Médico</Text>
            <Text style={{fontWeight:"300",color:"black"}} >{item.idMedicoNavigation.idUsuarioNavigation.nome}</Text>
            </View>
            <View style={styles.data}>
            <Text  >Data</Text>
            <Text style={{fontWeight:"300",color:"black"}} >{item.dtAgendamento}</Text>
            </View>
            <View style={styles.situacao}>
            <Text  >Situação</Text>
            <Text style={{fontWeight:"300",color:"black"}} >{item.idSituacaoNavigation.nome}</Text>
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
        borderRadius:100,
        marginTop:20,
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
        height:230,
        //F1FAFF
        backgroundColor:"#F1FAFF",
        borderBottomColor:"#333",

        borderBottomWidth:1,
    },
    data:{
        position:"relative",
        left:50
        
    },
    descricao:{
        position:"relative",
        top:70,
        right:50,
        width:180,
        height:80,
        borderTopColor:"#80bdde",
        borderTopWidth:2,

    },
    situacao:{
        position:"relative",
        left:90,
        height:20,
    },
    medico:{
        position:"absolute",
       width:120,
        top:50,
        left:0,
    },
    NomeUsuario:{
        position:"absolute",
        right:20,
        top:17,
        width:100,
        color:"white",
        textAlign:"center",
        backgroundColor:"#80aade",
        borderTopRightRadius:20,
    },
    img:{
        width:40,
        height:40,
        position:"absolute",
        zIndex:-1,
        right:0,
        display:"none",
        opacity:0.5,
    },
    img2:{
        opacity:0.1,
        width:100,
        height:100,
        position:"relative",
        left:"40%",
        marginTop:100
    },
    exit:{
        position:"relative",
        left:360,
        backgroundColor:"#eaeaea",
        textAlign:"center",
        width:50,
        top:10,
        color:"black",
    },  
});
export default Consultas;