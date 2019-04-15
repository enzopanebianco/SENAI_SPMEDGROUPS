import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import App from '../src/pages/Home/App';
import * as serviceWorker from './serviceWorker';
import Login from '../src/pages/Login/login'
import Consultas from '../src/pages/Consultas/consultas'
import CadastrarUsuario from '../src/pages/CadastrarUsuario/CadastrarUsuario';
import {UsuarioAutenticado} from './services/auth'

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
                <Permissao exact path="/consultas" component={Consultas} />
                <Permissao exact path="/cadastrarusuario" component={CadastrarUsuario}/>
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
