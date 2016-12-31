import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HeaderComponent from '../header';
import headerConnector from '../header/connector';
import MainComponent from '../main';
import mainConnector from '../main/connector';
import '../../index.css';
import DetailsComponent from '../details';
import detailsConnector from '../details/connector';

const Header = headerConnector(HeaderComponent);
const Main = mainConnector(MainComponent);
const Details = detailsConnector(DetailsComponent);

const View = ({children}) => (
    <div id="app">
        <Header />
        {children}
    </div>
);

const App = () => (
    <Router history={hashHistory}>
        <Route path="/" component={View}>
            <Route path={`category/:categoryId`} component={Main} />
            <Route path={`category/:categoryId/project/:projectId`} component={Details}/>

            <IndexRoute component={Main}/>
            <Route path="*" component={Main}/>
        </Route>
    </Router>
);

export default App;