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


const View = (props) => {
    return (
    <div id="app">
        <HeaderContainer />
        {props.children}
    </div>
)};

const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={View}>
                <Route path={`category/:categoryId`} component={MainContainer}/>
                {/*<Route path={`category/:categoryId/project/:projectId`} component={DetailsLayout}/>*/}

                <IndexRoute component={Main}/>
                <Route path="*" component={Main}/>
            </Route>
        </Router>
    );
};

export default App;