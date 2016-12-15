import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Header from './components/header';
import ProgressBar from './components/progress-bar';
import MainLayout from './layout/main';
import DetailsLayout from './layout/details';
import './index.css';


import { CAT_ID, PROJ_ID, DEFAULT_CATEGORY_ID } from './constants';

const defaultParams = {
    [CAT_ID]: DEFAULT_CATEGORY_ID
};

const View = ({children}) => <div className="view">{children}</div>;

class App extends Component {

    render() {
        console.log( this.props );
        return (

            <div id="app">
                <Header/>
                <main className="main">
                    <ProgressBar progress={this.props.progress}/>

                    <Router history={hashHistory}>
                        <Route path="/" component={View}>
                            <Route path={`category/:${CAT_ID}`} component={MainLayout}/>
                            <Route path={`category/:${CAT_ID}/project/:${PROJ_ID}`} component={DetailsLayout}/>


                            <IndexRoute component={MainLayout} params={defaultParams}/>
                            <Route path="*" component={MainLayout} params={defaultParams}/>
                        </Route>
                    </Router>

                </main>
            </div>
        );
    }
}

export default App;