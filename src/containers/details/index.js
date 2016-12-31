import React from 'react';
import Sidebar from '../../components/sidebar';
import { unflattenTree } from '../../helpers';
import CategoryList from '../../components/category-list';
import ProjectEdit from '../../components/project-edit';

const Details = ({ isSidebarOpen, categories, task, activeCategory, selectedCategoryId }) => {
    return (
        <div className="two-columns project-list">
            <Sidebar isSidebarOpen={isSidebarOpen}>
                <div className="row add-item-holder">
                    <h2>{activeCategory.name} <i className="small fa fa-chevron-right"/> {task.name}</h2>
                </div>
                <div className="row categories-holder">
                    <CategoryList list={unflattenTree(categories)} />
                </div>
            </Sidebar>
            <ProjectEdit item={task} selectedCategoryId={selectedCategoryId}/>
        </div>
    );
};
export default Details;