import React,{Component} from 'react';
import {View,Text,StyleSheet,FlatList,AsyncStorage,Image,StatusBar,TouchableOpacity,ImageBackground} from 'react-native';
import jwt from 'jwt-decode';
import api from '../services/api';

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
            id:"",
            data: [],
            loading: false,
        }
    }
    sair=async()=>{
      
        return alert("SPMEDICALGROUP"),this.props.navigation.navigate("AuthStack");
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
            if (this.state.loading) return; 
             this.setState({loading:true});
            const resposta = await api.get("/agendamentos/usuarios",config);
                
              
            const dados = resposta.data;
           
            this.setState({lista:dados,loading:false});       
        }
        ListaVazia = () => {
            return (
              <View>
         
                <Image
                source={require("../assets/img/pranchetinha.png")}
                style={styles.img2}
            />
                <Text style={{textAlign: 'center',color:"#777",fontWeight:"100"}}>Nenhuma Consulta Ainda...</Text>
                <View style={styles.imgLogo}>
            <Image
            source={require("../assets/img/Ativo1.png")}
            
            />
            <Text style={styles.spmed}>©SpmedGroup</Text>
           
            </View>
              </View>

            );
          }
        
    componentDidMount(){
        this.listar();
        
        this.buscar();
    }   
    render(){
      
            
        
        return(
            <View style={{backgroundColor:"white"}}>
                
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
              
            </View>
        );
        
      
    }
   
    _renderizaLista = ({item}) =>(
        
        <View style={styles.Getlist}>
           <View >
            <Text style={{color:"#999"}} >Paciente</Text>
            <Text style={{fontWeight:"300",color:"black",fontSize:17,fontFamily:"notoserif"}} >{item.idPacienteNavigation.idUsuarioNavigation.nome}</Text>
            </View>
            <View style={styles.medico} >
            <Text style={{color:"#999"}}>Médico</Text>
            <Text style={{fontWeight:"300",color:"black",fontSize:17}}  >{item.idMedicoNavigation.idUsuarioNavigation.nome}</Text>
            </View>
            <View style={styles.data}>
            <Text style={{color:"#999"}} >Data</Text>
            <Text  style={{fontWeight:"300",color:"black",fontSize:15}} >{item.dtAgendamento}</Text>
            </View>
            <View style={styles.situacao}>
            <Text  style={{color:"#999"}}>Situação</Text>
            <Text style={{fontWeight:"300",color:"black",fontSize:17}} >{item.idSituacaoNavigation.nome}</Text>
            </View>
            <View style={styles.descricao}>
            
            <Text style={{textAlign:"center",backgroundColor:"#80bdde",color:"white"}}>Descrição
            </Text>
            
            <Text style={{fontWeight:"200",color:"black",textAlign:"center",fontSize:12}}>{item.descricao}</Text>
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
        textShadowOffset: {width: -2, height: 1},
        textShadowRadius: 1
    },
    titulo:{
        color:"#80aade",
        textAlign:"center",
        
        position:"relative",
        left:155,
        height:30,
        width:120,
        fontSize:21,
        fontStyle:"italic",
        fontFamily:"sans-serif-light",
    },
   
    Getlist:{
        marginTop:30,
        flexDirection:"row",    
        
        backgroundColor:"white",
        height:150,
        //F1FAFF
        backgroundColor:"#F1FAFF",
        borderBottomColor:"#333",
        borderTopWidth:1,
        borderTopColor:"#80bdde",
        borderBottomWidth:0.5,
    },
    data:{
        position:"relative",
        left:50,
    },
    descricao:{
        position:"relative",
        top:70,
        right:50,
        width:125,
        height:70,
        borderWidth:0.5,
        borderColor:"#ccc",
        
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
        marginTop:15,
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
        position:"absolute",
        right:2,
        backgroundColor:"#80e289",
        textAlign:"center",
        width:70,
        height:23,
        fontSize:15,
        top:50,
        color:"white",
        borderTopLeftRadius:20,
    },  
    imgLogo:{
        alignItems:"center",
        marginTop:240,
        
        opacity:0.4,
    },  
    imgDescription:{
        width:30,
        height:30,
        backgroundColor:"#80bdde",
        
    },
});
export default Consultas;


