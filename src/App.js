import React, { Component } from 'react';
import './index.css';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';
import ProgressBar from './components/progress-bar';
import ProjectEdit from './components/project-edit';
import AddItem from './components/add-item';
import CategoryList from './components/category-list';


const dummyList = [
    {
        index: 1,
        title: 'Frontend',
        children: [
            {   index: 1, title: 'es6'     },
            {
                index: 2,
                title: 'react',
                children: [
                    {
                        index: 1,
                        title: 'components',
                        children: [
                            {   index: 1, title: 'stateful'   },
                            {   index: 2, title: 'stateless'   }

                        ]
                    },
                    {   index: 2, title: 'life cycle'   },
                    {   index: 3, title: 'routing'      }

                ]
            },
            {   index: 3, title: 'redux'   }
        ]
    },
    {
        index: 2,
        title: 'Markup',
        children: [
            {   index: 1, title: 'HTML5'    },
            {
                index: 2,
                title: 'CSS3',
                children: [
                    {   index: 1, title: 'Flexbox'  }
                ]
            }
        ]
    }
];

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
                        <CategoryList list={dummyList}/>
                    </div>
                </Sidebar>
                <Content />
            </div>
            <div className="two-columns project-details">
                <h1>{'To-Do item #1'}</h1>
                <Sidebar>
                    <div className="categories-holder">
                        {/*<CategoryList list={dummyList}/>*/}
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