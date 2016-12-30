import React from 'react';
import Sidebar from '../../components/sidebar';
import { unflattenTree } from '../../helpers';
import CategoryList from '../../components/category-list';
import ProjectEdit from '../../components/project-edit';

const Details = ({ isSidebarOpen, categories }) => {
    return (
        <div className="two-columns project-list">
            <Sidebar isSidebarOpen={isSidebarOpen}>
                <div className="row add-item-holder">
                    <h2>{'To-Do item #1'}</h2>
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

        // const { routeParams } = this.props;
        // const { categories, selectedCategory } = this.state;
        // return (
        //     <div className="two-columns project-details">
        //         <Sidebar>
        //             <h2>{'To-Do item #1'}</h2>
        //             <div className="categories-holder">
        //                 <CategoryList list={categories}
        //                               toggle={this.toggleCategory}
        //                               remove={this.removeCategory}
        //                               rename={this.renameCategory}
        //                               add={this.addSubCategory}
        //                               selectCategory={this.selectCategory}
        //                               routeParams={this.props.routeParams}
        //                 />
        //             </div>
        //         </Sidebar>
        //         <ProjectEdit routeParams={routeParams} item={selectedCategory.projects[routeParams[PROJ_ID]]}/>
        //     </div>
