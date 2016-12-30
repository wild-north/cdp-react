import React from 'react';
import Sidebar from '../../components/sidebar';
import AddItem from '../../components/add-item';
import { unflattenTree } from '../../helpers';
import CategoryList from '../../components/category-list';
import Content from '../content';

const Main = ({ isSidebarOpen, addCategory, categories }) => {

    return (
        <div className="two-columns project-list">
            <Sidebar isSidebarOpen={isSidebarOpen}>
                <div className="row add-item-holder">
                    <AddItem placeholder="Enter category title" add={addCategory}/>
                </div>
                <div className="row categories-holder">
                    <CategoryList list={unflattenTree(categories)} />
                </div>
            </Sidebar>
            <Content />
        </div>
    );
};
export default Main;