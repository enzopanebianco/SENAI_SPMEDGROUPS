import React,{Component} from  'react';
import {LeftContainer,Top,TopTitle,ImgPerfil,EndPoints,Container,IconMenu,Margin} from "./style";
import Perfil from  '../../assets/imagens/126486.png'
import {FaCaretDown,FaBars} from 'react-icons/fa';
import '../../assets/CSS/index.css'
export default class Admin extends Component{
    mostrar(){
        if (document.getElementById('menusecreto').style.display='none') {
            document.getElementById('menusecreto').style.display='block'
        }
        
        document.getElementById('icon').style.color='blueviolet'
    }
   
    mostrar2(){
        if (document.getElementById('menusecreto2').style.display='none') {
            document.getElementById('menusecreto2').style.display='block'
        }
        document.getElementById('icon2').style.color='blueviolet'
    }
    
    render()
    {
        return(
            
            <div>
                <Margin>
                <Top>
                    <IconMenu>
                    <FaBars style={{height:"30px",width:"30px"}} onClick={this.mostrarContainer}/>
                    </IconMenu>
                    <TopTitle>Enzo</TopTitle>
                <LeftContainer classname="left">
                   <ImgPerfil src={Perfil} />
                   <EndPoints>
                   <ul>
                       <li ><a>Listar</a><a style={{color:"orange"}} ><FaCaretDown onClick={this.mostrar}  id="icon"/></a>
                        <ul id="menusecreto">
                            <li><a>Usuario</a></li>
                        </ul>
                       </li>
                       <li><a>Cadastrar</a><a style={{color:"orange"}}><FaCaretDown onClick={this.mostrar2} id="icon2"/></a>
                       <ul id="menusecreto2" >
                            <li><a>Usuario</a></li>
                            <li><a>Produto</a></li>
                        </ul>
                       </li>
                   </ul>
                   </EndPoints>
                </LeftContainer>
                </Top>
                <Container></Container>
                </Margin>
            </div>
        );
    }
}
