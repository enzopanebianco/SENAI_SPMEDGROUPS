import React,{Component} from 'react';
import Axios from 'axios';
import JwtDecode from 'jwt-decode';

class CadastrarUsuario extends Component{
    constructor(){
        super();
        this.state={
            nome:"",
            email:"",
            senha:"",
            tipousuario:"",
            idclinica:1
        }
        this.atualizaEstadoNomeForm=this.atualizaEstadoNome.bind(this);
        this.atualizaEstadoEmailForm=this.atualizaEstadoEmail.bind(this);
        this.atualizaEstadoSenhaForm=this.atualizaEstadoSenha.bind(this);
        this.atualizaEstadoTipoUsuarioForm=this.atualizaEstadoTipoUsuario.bind(this);
        
    }
    
    Cadastrar(event){
        event.preventDefault();

        let token = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + token
            }
        };

        Axios.post('http://localhost:5000/api/usuarios',{
            nome:this.state.nome,
            email:this.state.email,
            senha:this.state.senha,
            tipousuario:this.state.tipousuario,
            idclinica:this.state.idclinica
        },config)
        .then(data=>console.log(data))
        .catch(erro=>console.log(erro))
        
    }
    atualizaEstadoNome(event){
        this.setState({nome:event.target.value})
    }
    
    atualizaEstadoEmail(event){
        this.setState({email:event.target.value})
    }
    
    atualizaEstadoSenha(event){
        this.setState({senha:event.target.value})
    }
    
    atualizaEstadoTipoUsuario(event){
        this.setState({tipousuario:event.target.value})
    }
    
    render(){
        return(
            <div>
                <h2>CadastrarUsuario</h2>
                <form onSubmit={this.Cadastrar.bind(this)}>
                    <div className="item">
                        Nome
                        <input type="text" value={this.state.nome} onChange={this.atualizaEstadoNomeForm} />    
                    </div>

                    <div className="item">
                        Email
                        <input type="text" value={this.state.email} onChange={this.atualizaEstadoEmailForm} />
                    </div>
                        
                    <div className="item">
                    Senha
                        <input type="password" value={this.state.senha} onChange={this.atualizaEstadoSenhaForm}/>
                    </div>
                    
                    {/* <div className="item">
                        TipoUsuario
                        <input type="text" placeholder="
                        0-Administrador
                        1-Paciente
                        2-Médico
                        " value={this.state.tipousuario} onChange={this.atualizaEstadoTipoUsuarioForm}
                       />
                    </div> */}
                    <select value={this.state.tipousuario} onChange={this.atualizaEstadoTipoUsuarioForm}>
                        <option value="1">Paciente</option>
                        <option value="0">Administrador</option>
                        <option value="2">Médico</option>
                    </select>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}
export default CadastrarUsuario;    