import React from 'react';
import Sidebar from '../../components/sidebar';
import AddItem from '../../components/add-item';
import { unflatTree } from '../../helpers';
// import Content from '../../components/content';
import { CategoryList } from '../../components/category-list';

import { mainConnector } from './connector';

const Main = (props) => {
    const list = unflatTree(props.categories);

    return (
        <div className="two-columns project-list">

            <Sidebar isSidebarOpen={props.isSidebarOpen}>
                <div className="row">
                    <div className="add-item-holder">
                        <AddItem placeholder="Enter category title" add={props.addCategory}/>
                    </div>
                </div>
                <div className="categories-holder">
                    <CategoryList list={list}
                                  selectedCategoryId={props.selectedCategoryId}
                                  selectCategory={props.selectCategory}
                                  routeParams={props.routeParams}
                                  open={props.openCategory}
                                  close={props.closeCategory}
                                  remove={props.removeCategory}
                                  rename={props.renameCategory}
                                  add={props.addCategory}
                    />
                </div>
            </Sidebar>
            {/*<Content list={this.state.selectedCategory.projects}*/}
                     {/*toggle={this.toggleProject}*/}
                     {/*routeParams={this.props.routeParams}*/}
            {/*/>*/}
        </div>
    );
};
export default mainConnector(Main);