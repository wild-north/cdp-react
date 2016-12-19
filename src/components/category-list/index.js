import React from 'react';
import './styles.css';
import Category from '../category';

export const CategoryList = (props) => {
    let { list, selectedCategoryId, routeParams,
            selectCategory, open, close, add, remove, rename } = props;
    return (
        <ul>
            {
                list.map((item, key) => {
                    return (
                        <Category key={key}
                                  item={item}
                                  open={open}
                                  close={close}
                                  add={add}
                                  remove={remove}
                                  rename={rename}
                                  selectCategory={selectCategory}
                                  selectedCategoryId={selectedCategoryId}
                                  routeParams={routeParams}>
                            {
                                item.kids && item.kids.length ?
                                    <CategoryList list={item.kids}
                                                  open={open}
                                                  close={close}
                                                  add={add}
                                                  remove={remove}
                                                  rename={rename}
                                                  selectCategory={selectCategory}
                                                  selectedCategoryId={selectedCategoryId}
                                                  routeParams={routeParams}/>
                                    : null
                            }
                        </Category>
                    );
                })
            }
        </ul>
    )

};