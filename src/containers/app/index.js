import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Header from '../../components/header';
import ProgressBar from '../../components/progress-bar';
import { connector } from './connector';
import Main from '../../containers/main';


// import DetailsLayout from '../../layout/details';
import '../../index.css';


const View = (props) => {
    return (
    <div id="app">
        <Header openSidebar={props.openSidebar} closeSidebar={props.closeSidebar} isSidebarOpen={props.isSidebarOpen}/>
        <main className="main">
            <ProgressBar progress={props.progress}/>
            {props.children}
        </main>
    </div>
)};

const ViewWrap = connector(View);

const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={ViewWrap}>
                <Route path={`category/:categoryId`} component={Main}/>
                {/*<Route path={`category/:categoryId/project/:projectId`} component={DetailsLayout}/>*/}

                <IndexRoute component={Main}/>
                <Route path="*" component={Main}/>
            </Route>
        </Router>
    );
};

export default App;