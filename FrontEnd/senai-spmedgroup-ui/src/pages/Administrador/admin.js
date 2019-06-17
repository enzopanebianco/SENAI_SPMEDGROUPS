import React,{Component} from  'react';
import {LeftContainer,Top,TopTitle,ImgPerfil,EndPoints,Container,IconMenu,TextP,Nome,Exit} from "./style";
import Perfil from  '../../assets/imagens/126486.png'
import {FaCaretDown,FaBars,FaSignOutAlt} from 'react-icons/fa';
import '../../assets/CSS/index.css'
import {Link} from 'react-router-dom';
export default class Admin extends Component{
    constructor(){
        super();
        this.state={
            nome:""
        }
    }
    mostrar(){
        if (document.getElementById('menusecreto').style.display='none') {
            document.getElementById('menusecreto').style.display='block'
        }
        
        document.getElementById('icon').style.color='orange';
        document.getElementById('menusecreto').style.padding="10px";
        document.getElementById('menusecreto').style.background="orange";
    }
   
    mostrar2(){
        if (document.getElementById('menusecreto2').style.display='none') {
            document.getElementById('menusecreto2').style.display='block'
        }
        else if(document.getElementById('menusecreto2').style.display='block'){
            document.getElementById('menusecreto2').style.display='none';
        }
        document.getElementById('icon2').style.color='blueviolet'
        document.getElementById('menusecreto2').style.padding="10px";
        document.getElementById('menusecreto2').style.background="blueviolet";

        
    }
    buscarnome(){
        const value = localStorage.getItem("spmed-usuario");
        let jwtdecode = require('jwt-decode');
        this.setState({nome:jwtdecode(value).nome});
    }
    componentDidMount(){
        this.buscarnome();
    }
    render()
    {
        return(
            
            <div>
                <Top>
                    <IconMenu>
                    <FaBars style={{height:"30px",width:"30px"}} onClick={this.mostrarContainer}/>
                    </IconMenu>
                    <TopTitle>Administrador</TopTitle>
                <LeftContainer classname="left">
                <Link to="/"><TextP>Voltar pra Home <FaSignOutAlt /></TextP></Link>
                   <ImgPerfil src={Perfil} />
                   <Nome>{this.state.nome}</Nome>
                    <Exit>Deslogar</Exit>
                   <EndPoints>
                   <ul>
                       <li ><a>Listar</a><a style={{color:"white"}} ><FaCaretDown onClick={this.mostrar}  id="icon"/></a>
                        <ul id="menusecreto">
                            <Link to="/todasconsultas"><li><a>Consultas</a></li></Link>
                            <Link to="/analytics"><li><a>Analytics</a></li></Link>
                            
                        </ul>
                       </li>
                       <li><a>Cadastrar</a><a style={{color:"white"}}><FaCaretDown onClick={this.mostrar2} id="icon2"/></a>
                       <ul id="menusecreto2" >
                            <Link to="/cadastrarusuario"><li><a>Usuário</a></li></Link>
                            <Link to="/todasconsultas"><li><a>Consultas</a></li></Link>
                            <Link to="/cadastrarmedico"><li><a>Médico</a></li></Link>
                            <Link to="/cadastrarpaciente"><li><a>Paciente</a></li></Link>
                            <Link to="/pesquisa"><li><a>Analytics</a></li></Link>
                        </ul>
                       </li>
                   </ul>
                   </EndPoints>
                </LeftContainer>
                </Top>
                <Container>
                </Container>
                   
                
            </div>
        );
    }
}
