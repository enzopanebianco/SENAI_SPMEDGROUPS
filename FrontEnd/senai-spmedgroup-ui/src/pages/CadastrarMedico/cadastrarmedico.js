import React,{Component} from  'react';
import Rodape from '../Componentes/Rodape';
import Cabecalho from '../Componentes/Cabecalho';
import Axios from 'axios';

class CadastrarMedico extends Component{
    constructor(){
        super();
        this.state={
            id:"",
            idusuario:"",
            crm:"",
            listaE:[],
            idespecialidade:""
        }

    }
    cadastrarMedico(event){
        event.preventDefault();
        let tokenMM = localStorage.getItem("spmed-usuario");
        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + tokenMM
            }
        };
        Axios.post('http://localhost:5000/api/medicos',{
            id:this.state.id,
            idusuario:this.state.idusuario,
            crm:this.state.crm,
            idespecialidade:this.state.idespecialidade
        },config)
        .then(data=>console.log(data))
        .catch(erro=>console.log(erro))
    }
    atualizaEstadoIdUsuario(event){
        this.setState({idusuario:event.target.value})
    }
    atualizaEstadoCRM(event){
        this.setState({crm:event.target.value})
    }
    atualizaEstadoIdEspecialidade(event){
        this.setState({idespecialidade:event.target.value})
    }
    buscarespecialidade(){
        Axios.get('http://localhost:5000/api/especialidades')
        .then(resposta=>{
            const especialidades = resposta.data;
            this.setState({listaE:especialidades});
        })
        console.log(this.listaE);
    }
    componentDidMount(){
        this.buscarespecialidade();
    }
    render(){
        return(
            <div>
                <Cabecalho />
                <h2>CadastroDeMédicos</h2>
                <form onSubmit={this.cadastrarMedico.bind(this)}>
                    <div className="item_">
                    <a>IDUSUÁRIO:</a>
                    <input type="text" value={this.state.idusuario} onChange={this.atualizaEstadoIdUsuario.bind(this)}/>
                    
                    </div>
                    <div className="item_" >
                    <a>CRM:</a>
                    <input type="text"value={this.state.crm} onChange={this.atualizaEstadoCRM.bind(this)}/>
                    
                    </div>
                    <div className="item_">
                    <a>ESPECIALIDADE:</a>
                    <select value={this.state.idespecialidade} onChange={this.atualizaEstadoIdEspecialidade.bind(this)}>
                        <option value="0">Selecione</option>{
                            this.state.listaE.map((element)=>{
                                return <option key={element.id} value={element.id}>{element.nome}</option>
                            })
                        }
                    </select>
                    <button type="submit">CADASTRAR</button>
                    </div>
                </form>
                <Rodape />
            </div>
        );
    }
}
export default CadastrarMedico;