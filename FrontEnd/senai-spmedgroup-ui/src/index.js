import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import App from '../src/pages/Home/App';
import * as serviceWorker from './serviceWorker';
import Login from '../src/pages/Login/login'

import CadastrarUsuario from '../src/pages/CadastrarUsuario/CadastrarUsuario';
import {UsuarioAutenticado} from './services/auth';
import AtualizarConsulta from  '../src/pages/Consultas/atualizarConsulta'
import {decode} from './services/auth';
import TodasConsultas from '../src/pages/Consultas/todasconsultas'
import ConsultasPacientes from '../src/pages/Consultas/ConsultasPacientes'
import Sobre from '../src/pages/Sobre/sobre'
import CadastrarMedico from '../src/pages/CadastrarMedico/cadastrarmedico';
import CadastrarPaciente from  '../src/pages/CadastrarPaciente/cadastrarpaciente';
import ListagemAnalytics from '../src/pages/DataAnalytics/ListagemAnalytics';
import CadastrarAnalytics from '../src/pages/DataAnalytics/CadastrarAnalytics';
import Admin from  '../src/pages/Administrador/admin'
import Mapa from '../src/pages/Mapa/mapa';
import NaoEncontrada from '../src/pages/Componentes/NaoEncontrada'
const PermissaoAdmin = ({ component: Component }) => (
    <Route
      render={props =>
        UsuarioAutenticado() && decode()=="0"? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );

  const PermissaoAdminMed = ({ component: Component }) => (
    <Route
      render={props =>
        UsuarioAutenticado() && decode()=="2"||decode()==="0"? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );


const Permissao=({component:Component})=>(
    <Route 
    render={props=>UsuarioAutenticado()? 
      (<Component {...props}/>):
      (<Redirect to ={{pathname:'/login',state:{from:props.location}}} />)
      
          }
    />
    
);
const rotas=(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <PermissaoAdmin path="/paineladministrador" component={Admin} />
                <PermissaoAdmin path="/cadastrarusuario" component={CadastrarUsuario}/>
                <PermissaoAdmin exact path="/todasconsultas" component={TodasConsultas} />
                <PermissaoAdmin path="/todasconsultas/:id" component={AtualizarConsulta} />
                <Permissao path="/consultas/pacientes" component={ConsultasPacientes} />
                <Route path="/sobre" component={Sobre} />
                <PermissaoAdmin path="/cadastrarmedico" component={CadastrarMedico}/>
                <PermissaoAdmin path="/cadastrarpaciente" component={CadastrarPaciente}/>
                {/* <Route path="/mapa" component={Mapa} /> */}
                <PermissaoAdmin path="/analytics" component={ListagemAnalytics} />
                <PermissaoAdmin path="/pesquisa" component={CadastrarAnalytics} />
                <Route component={NaoEncontrada} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
