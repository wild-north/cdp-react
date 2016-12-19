import React from 'react';
import './styles.css';
import Category from '../category';
import { SEPARATOR } from '../../constants';

export const CategoryList = (props) => {
    let { list, selectedCategoryId, routeParams, parentIndex,
            selectCategory, open, close, add, remove, rename } = props;

    return (
        <ul>
            {
                list.map((item, key) => {
                    const index = key + 1;
                    const fullIndex = parentIndex ? `${parentIndex}${SEPARATOR}${index}` : index;

                    return (
                        <Category key={key}
                                  item={item}
                                  index={fullIndex}
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
                                                  parentIndex={fullIndex}
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