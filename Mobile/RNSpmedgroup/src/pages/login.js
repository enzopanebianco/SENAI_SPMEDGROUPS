import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import api from '../services/api';

class Login extends Component{
    static navigationOptions={
        header:null
    };
    constructor(props){
        super(props);
        this.state={
            email:"",
            senha:""
        }
    }
    logar = async()=>{
      
        const resposta = await api.post("/login",{
            email:this.state.email,
            senha:this.state.senha
        })
        const token = resposta.data.token;
        
        await AsyncStorage.setItem("spmed",token);

        this.props.navigation.navigate("MainNavigator");
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
                <Text style={styles.titulo}>ENTRAR</Text>
            </View>
                
            
                <TextInput onChangeText={email=>this.setState({email})}
                style={styles.inputE} placeholder="Email"
                    
                />
                
                <TextInput onChangeText={senha=>this.setState({senha})}
                style={styles.inputS} placeholder="Senha" secureTextEntry={true}
                   
                />
        
            <TouchableOpacity
                style={styles.btn}
                onPress={this.logar}
            >
                <Text style={styles.btnTXT}>Login</Text>
            </TouchableOpacity>
            <Image
            source={require("../assets/img/Ativo1.png")}
            style={styles.img}
            />
            <Text style={styles.spmed}>SpmedGroup©</Text>
            </View>
        );
    
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
    inputE:{
        marginTop:70,
        backgroundColor:"#fbfbfb",
        padding:10,
        borderBottomColor:"#80bdde",
        borderBottomWidth:2,
        width:300,
        marginLeft:55,
        textAlign:"center",
    },
    
    inputS:{
        marginTop:20,
        width:300,
        backgroundColor:"#fbfbfb",
        borderBottomColor:"#80bdde",
        borderBottomWidth:2,
        marginLeft:55,
        textAlign:"center",
    },
    btn:{
        backgroundColor:"black",
        position:"relative",
        top:60,
        width:80,
        height:35,
        left:170,
    },
    btnTXT:{
        color:"white",
        fontWeight:"100",
        position:"relative",
        top:5,
        left:15,
        fontSize:16,
        textTransform:"uppercase"
    },
    img:{
        position:"relative",
        left:165,
        top:140,
        opacity:0.3,
    },  
    spmed:{
        position:"relative",
        top:150,
        left:160,
        color:"#cccccc"
    },
})
export default Login;