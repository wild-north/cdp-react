import React, {Component} from 'react';
import Content from '../../components/content';
import Sidebar from '../../components/sidebar';
import AddItem from '../../components/add-item';
import CategoryList from '../../components/category-list';
import categoriesList from '../../mocks/categories';
import { CAT_ID, DEFAULT_CATEGORY_ID } from '../../constants';
import { isUndefined } from 'lodash';

import { toggleCategory, addSubCategory, removeCategory,
    renameCategory, addCategory, getCategoryByKey, toggleProject } from '../../actions/categories';


export default  class Main extends Component {
    constructor() {
        super();
        // TODO: change selectedCategory to selectedCategoryId
        this.state = {
            categories: categoriesList,
            selectedCategory: categoriesList[DEFAULT_CATEGORY_ID]
        };
        this.toggleCategory = this.toggleCategory.bind(this);
        this.removeCategory = this.removeCategory.bind(this);
        this.renameCategory = this.renameCategory.bind(this);
        this.addSubCategory = this.addSubCategory.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.toggleProject = this.toggleProject.bind(this);
    }
    componentWillMount() {
        const list = this.state.categories;
        const { routeParams, route } = this.props;

        let index = routeParams[CAT_ID];

        /* if no route param, redirect to default page */
        if (isUndefined(index)) {
            index = route.params && route.params[CAT_ID] ? route.params[CAT_ID] : DEFAULT_CATEGORY_ID;
            window.location.replace(`/#/category/${index}`);
            return false;
        }
        this.setState({ selectedCategory: getCategoryByKey(list, index) });
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
        this.setState({
            categories: addSubCategory(this.state.categories, index, newTitle)
        });
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
        return (
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
                         routeParams={this.props.routeParams}
                />
            </div>
        );
    }
}