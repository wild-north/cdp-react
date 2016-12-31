import React from 'react';
import Sidebar from '../../components/sidebar';
import { unflattenTree } from '../../helpers';
import CategoryList from '../../components/category-list';
import ProjectEditComponent from '../../components/project-edit';
import { projectEditConnector } from '../../containers/details/connector';

const ProjectEdit = projectEditConnector(ProjectEditComponent);

const Details = ({ isSidebarOpen, categories, taskName, activeCategoryName }) => {
    return (
        <div className="two-columns project-list">
            <Sidebar isSidebarOpen={isSidebarOpen}>
                <div className="row add-item-holder">
                    <h2>{activeCategoryName} <i className="small fa fa-chevron-right"/> {taskName}</h2>
                </div>
                <div className="row categories-holder">
                    <CategoryList list={unflattenTree(categories)} />
                </div>
            </Sidebar>
            <ProjectEdit />
        </div>
    );
};
export default Details;