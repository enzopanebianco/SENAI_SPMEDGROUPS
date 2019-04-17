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
import {parseJwt} from './services/auth';
import TodasConsultas from '../src/pages/Consultas/todasconsultas'
import ConsultasPacientes from '../src/pages/Consultas/ConsultasPacientes'

const PermissaoAdmin = ({ component: Component }) => (
    <Route
      render={props =>
        UsuarioAutenticado() && parseJwt().Role === 0 ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
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
                <Permissao exact path="/cadastrarusuario" component={CadastrarUsuario}/>
                <Permissao exact path="/todasconsultas" component={TodasConsultas} />
                <Permissao exact path="/consultas/pacientes" component={ConsultasPacientes} />
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
