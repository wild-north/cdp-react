import React from 'react';
import Sidebar from '../../components/sidebar';
import AddItem from '../../components/add-item';

// import Content from '../../components/content';
import CategoryList from '../../components/category-list';

import { mainConnector } from './connector';

const Main = (props) => {
    return (
        <div className="two-columns project-list">

            <Sidebar isSidebarOpen={props.isSidebarOpen}>
                <div className="row">
                    <div className="add-item-holder">
                        <AddItem placeholder="Enter category title" add={props.addCategory}/>
                    </div>
                </div>
                <div className="categories-holder">
                    <CategoryList list={props.categories}
                                  selectedCategoryId={props.selectedCategoryId}
                                  selectCategory={props.selectCategory}
                                  routeParams={props.routeParams}

                                  open={props.openCategory}
                                  close={props.openCategory}
                                  remove={props.closeCategory}
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