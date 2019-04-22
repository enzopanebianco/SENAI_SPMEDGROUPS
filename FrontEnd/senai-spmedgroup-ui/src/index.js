import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import App from '../src/pages/Home/App';
import * as serviceWorker from './serviceWorker';
import Login from '../src/pages/Login/login'
import ConsultasMedicos from '../src/pages/Consultas/ConsultasMedicos'
import CadastrarUsuario from '../src/pages/CadastrarUsuario/CadastrarUsuario';
import {UsuarioAutenticado} from './services/auth';

import {decode} from './services/auth';
import TodasConsultas from '../src/pages/Consultas/todasconsultas'
import ConsultasPacientes from '../src/pages/Consultas/ConsultasPacientes'
import Sobre from '../src/pages/Sobre/sobre'
import CadastrarMedico from '../src/pages/CadastrarMedico/cadastrarmedico';
import CadastrarPaciente from  '../src/pages/CadastrarPaciente/cadastrarpaciente';

const PermissaoAdmin = ({ component: Component }) => (
    <Route
      render={props =>
        UsuarioAutenticado() && decode()=="0" ? (
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
                <Route exact path="/login" component={Login} />
                <Permissao exact path="/consultas/medicos" component={ConsultasMedicos} />
                <PermissaoAdmin exact path="/cadastrarusuario" component={CadastrarUsuario}/>
                <PermissaoAdmin exact path="/todasconsultas" component={TodasConsultas} />
                <Permissao exact path="/consultas/pacientes" component={ConsultasPacientes} />
                <Route exact path="/sobre" component={Sobre} />
                <PermissaoAdmin exact path="/cadastrarmedico" component={CadastrarMedico}/>
                <PermissaoAdmin exact path="/cadastrarpaciente" component={CadastrarPaciente}/>
                {/* <Route component={NaoEncontrada} /> */}
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
