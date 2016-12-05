import React, { Component } from 'react';
import './index.css';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';
import ProgressBar from './components/progress-bar';
import ProjectEdit from './components/project-edit';
import AddItem from './components/add-item';
import CategoryList from './components/category-list';
import categoriesList from './mocks/categories';

import { SEPARATOR } from './components/category-list';

function processList(arr) {
    return arr.map(val => {
        if ('kids' in val) {
            val.opened = true;
            processList(val.kids);
        }
        return val;
    });
}


const changeOpened = (indexesString, list) => {
    const indexArray = indexesString.split(SEPARATOR);
    let currentValue;
    indexArray.forEach(index => {
        --index;
        currentValue = currentValue ? currentValue.kids[index] : list[index];
    });
    if (typeof currentValue === 'object' && 'opened' in currentValue) {
        currentValue.opened = !currentValue.opened;
        console.log(currentValue);
    }
};


class App extends Component {
    toggleOpened(index, list) {
        return () => changeOpened(index, list);
    }

    render() {
    return (
      <div id="app">
        <Header/>
        <main className="main">
            <ProgressBar progress={10}/>
            <div  className="two-columns project-list">
                <Sidebar>
                    <div className="row">
                        <div className="add-item-holder">
                            <AddItem placeholder="Enter category title"/>
                        </div>
                    </div>
                    <div className="categories-holder">
                        <CategoryList list={processList(categoriesList)} toggleOpened={this.toggleOpened}/>
                    </div>
                </Sidebar>
                <Content />
            </div>
            <div className="two-columns project-details">
                <h1>{'To-Do item #1'}</h1>
                <Sidebar>
                    <div className="categories-holder">
                        <CategoryList list={processList(categoriesList)} toggleOpened={this.toggleOpened}/>
                    </div>
                </Sidebar>
                <ProjectEdit />
            </div>
        </main>
      </div>
    );
    }
}

export default App;