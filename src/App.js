import React, { Component } from 'react';
import './index.css';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';
import ProgressBar from './components/progress-bar';
import ProjectEdit from './components/project-edit';
import AddItem from './components/add-item';
import CategoryList from './components/category-list';
import categoriesList from './dummy/categories';

class App extends Component {
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
                        <CategoryList list={categoriesList}/>
                    </div>
                </Sidebar>
                <Content />
            </div>
            <div className="two-columns project-details">
                <h1>{'To-Do item #1'}</h1>
                <Sidebar>
                    <div className="categories-holder">
                        <CategoryList list={categoriesList}/>
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