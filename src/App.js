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


import { toggleCategory, addSubCategory, removeCategory, renameCategory, addCategory } from './actions/categories';



class App extends Component {
    constructor() {
        super();
        this.state = {
            categories: categoriesList
        };
        this.toggleCategory = this.toggleCategory.bind(this);
        this.removeCategory = this.removeCategory.bind(this);
        this.renameCategory = this.renameCategory.bind(this);
        this.addSubCategory = this.addSubCategory.bind(this);
    }
    toggleCategory(index) {
        this.setState({ categories: toggleCategory(this.state.categories, index) });
    }
    removeCategory(index) {
        this.setState({ categories: removeCategory(this.state.categories, index) });
    }
    renameCategory(index, newTitle) {
        this.setState({ categories: renameCategory(this.state.categories, index, newTitle) });
    }
    addSubCategory(index, newTitle) {
        this.setState({ categories: addSubCategory(this.state.categories, index, newTitle) });
    }
    addCategory(newTitle) {
        this.setState({ categories: addCategory(this.state.categories, newTitle) });
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
                                    <AddItem placeholder="Enter category title" add={this.addCategory}/>
                                </div>
                            </div>
                            <div className="categories-holder">
                                <CategoryList list={this.state.categories}
                                              toggle={this.toggleCategory}
                                              remove={this.removeCategory}
                                              rename={this.renameCategory}
                                              add={this.addSubCategory} />
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