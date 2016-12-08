import React, {Component} from 'react';
import './index.css';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';
import ProgressBar from './components/progress-bar';
// import ProjectEdit from './components/project-edit';
import AddItem from './components/add-item';
import CategoryList from './components/category-list';
import categoriesList from './mocks/categories';
import { isArray } from 'lodash';

import {SEPARATOR} from './components/category-list';

const changeOpened = (indexesString, list) => {
    list = list.slice();

    /* get [1,0,1] from '1.0.1' */
    const indexArray = indexesString.split(SEPARATOR);

    let currentValue;
    indexArray.forEach(index => {
        currentValue = currentValue ? currentValue.kids[index - 1] : list[index - 1];
    });

    if (typeof currentValue === 'object' && 'opened' in currentValue) {
        currentValue.opened = !currentValue.opened;
        console.info(`'${indexesString} ${currentValue.title}' ${currentValue.opened ? ' opened' : ' closed'}`);
    }
    return list;
};

const deleteCetegory = (indexesString, list) => {

    if (!confirm('Delete this item?')) return list;

    list = list.slice();

    const indexes = indexesString.split(SEPARATOR).map(val => +val - 1);
    const indexOfItemToBeDeleted = indexes[indexes.length - 1];

    let currentItem;
    for (let i = 0; i < indexes.length - 1; i++) {
        let index = indexes[i];
        currentItem = currentItem ? currentItem.kids[index] : list[index];
    }
    currentItem = currentItem || list;


    if (isArray(currentItem)) {
        currentItem.splice(indexOfItemToBeDeleted, 1);
    } else if (isArray(currentItem.kids)) {
        currentItem.kids.splice(indexOfItemToBeDeleted, 1);
    }

    return list;
};

const renameCategory = (indexesString, list, newTitle) => {
    if (!confirm('Edit this item?')) return list;

    list = list.slice();
    newTitle = newTitle.trim();

    const indexArray = indexesString.split(SEPARATOR);

    let currentValue;
    indexArray.forEach(index => {
        currentValue = currentValue ? currentValue.kids[index - 1] : list[index - 1];
    });

    if (typeof currentValue === 'object' && 'title' in currentValue) {
        currentValue.title = newTitle;
    }
    return list;
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            categoriesList: categoriesList
        };
        this.toggleCategory = this.toggleCategory.bind(this);
        this.deleteCetegory = this.deleteCetegory.bind(this);
        this.renameCetegory = this.renameCetegory.bind(this);
    }
    toggleCategory(index, list) {
        return () => {
            this.setState({
                categoriesList: changeOpened(index, list)
            });
        };
    }
    deleteCetegory(index, list) {
        return () => {
            this.setState({
                categoriesList: deleteCetegory(index, list)
            });
        };
    }
    renameCetegory(index, list, newTitle) {
        this.setState({
            categoriesList: renameCategory(index, list, newTitle)
        });
    }

    render() {
        return (
            <div id="app">
                <Header/>
                <main className="main">
                    <ProgressBar progress={10}/>
                    <div className="two-columns project-list">
                        <Sidebar>
                            <div className="row">
                                <div className="add-item-holder">
                                    <AddItem placeholder="Enter category title"/>
                                </div>
                            </div>
                            <div className="categories-holder">
                                <CategoryList list={this.state.categoriesList} toggleOpened={this.toggleCategory} remove={this.deleteCetegory} rename={this.renameCetegory}/>
                            </div>
                        </Sidebar>
                        <Content />
                    </div>
                    {/*<div className="two-columns project-details">*/}
                        {/*<h1>{'To-Do item #1'}</h1>*/}
                        {/*<Sidebar>*/}
                            {/*<div className="categories-holder">*/}
                                {/*<CategoryList list={processList(categoriesList)} toggleOpened={this.toggleOpened}/>*/}
                            {/*</div>*/}
                        {/*</Sidebar>*/}
                        {/*<ProjectEdit />*/}
                    {/*</div>*/}
                </main>
            </div>
        );
    }
}

export default App;