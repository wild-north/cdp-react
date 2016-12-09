import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import CategoryList from '../../components/category-list';
import categoriesList from '../../mocks/categories';
import ProjectEdit from '../../components/project-edit';

import { PROJ_ID } from '../../constants';

import { toggleCategory, addSubCategory, removeCategory,
    renameCategory, addCategory, getCategoryByKey, toggleProject } from '../../actions/categories';


export default class DetailsLayout extends Component {
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
        this.setState({ selectedCategory: getCategoryByKey(this.state.categories, index) });
    }
    toggleProject(index) {
        this.setState({ selectedCategory: toggleProject(this.state.selectedCategory, index) });
    }

    render() {
        const { routeParams } = this.props;
        return (
            <div className="two-columns project-details">
                <Sidebar>
                    <h2>{'To-Do item #1'}</h2>
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
                <ProjectEdit routeParams={routeParams} item={this.state.selectedCategory.projects[routeParams[PROJ_ID]]}/>
            </div>
        );
    }
}