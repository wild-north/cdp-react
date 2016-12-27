import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Header from '../header';
import headerConnector from '../header/connector';
import Main from '../main';
import mainConnector from '../main/connector';
import '../../index.css';
// import DetailsLayout from '../../layout/details';


const HeaderContainer = headerConnector(Header);
const MainContainer = mainConnector(Main);


const View = ({children}) => (
    <div id="app">
        <HeaderContainer />
        {children}
    </div>
);

const App = () => (
    <Router history={hashHistory}>
        <Route path="/" component={View}>
            <Route path={`category/:categoryId`} component={MainContainer}/>
            {/*<Route path={`category/:categoryId/project/:projectId`} component={DetailsLayout}/>*/}

            <IndexRoute component={MainContainer}/>
            <Route path="*" component={MainContainer}/>
        </Route>
    </Router>
);

export default App;