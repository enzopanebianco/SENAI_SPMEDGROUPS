import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import App from '../src/pages/Home/App';
import * as serviceWorker from './serviceWorker';
import Login from '../src/pages/Login/login'

const rotas=(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
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
