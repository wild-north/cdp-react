import React, {Component} from 'react';
import './index.css';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';
import ProgressBar from './components/progress-bar';
import ProjectEdit from './components/project-edit';
import AddItem from './components/add-item';
import CategoryList from './components/category-list';
import categoriesList from './mocks/categories';


import { toggleCategory, addSubCategory, removeCategory,
    renameCategory, addCategory, getSelectedCategory, toggleProject } from './actions/categories';



class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedCategory: categoriesList[0],
            categories: categoriesList
        };
        this.toggleCategory = this.toggleCategory.bind(this);
        this.removeCategory = this.removeCategory.bind(this);
        this.renameCategory = this.renameCategory.bind(this);
        this.addSubCategory = this.addSubCategory.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.toggleProject = this.toggleProject.bind(this);
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
    selectCategory(index) {
        this.setState({ selectedCategory: getSelectedCategory(this.state.categories, index) });
    }
    toggleProject(index) {
        this.setState({ selectedCategory: toggleProject(this.state.selectedCategory, index) });
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
                                              selectedCategory={this.state.selectedCategory}
                                              toggle={this.toggleCategory}
                                              remove={this.removeCategory}
                                              rename={this.renameCategory}
                                              add={this.addSubCategory}
                                              selectCategory={this.selectCategory}
                                 />
                            </div>
                        </Sidebar>
                        <Content list={this.state.selectedCategory.projects}
                                 toggle={this.toggleProject}
                        />
                    </div>
                    <div className="two-columns project-details">
                        <h1>{'To-Do item #1'}</h1>
                        <Sidebar>
                            <div className="categories-holder">
                                <CategoryList list={this.state.categories}
                                              toggle={this.toggleCategory}
                                              remove={this.removeCategory}
                                              rename={this.renameCategory}
                                              add={this.addSubCategory}
                                              selectCategory={this.selectCategory}
                                />
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