import React from 'react';
import './styles.css';
import Category from '../category';
import { SEPARATOR } from '../../constants';

export const CategoryList = (props) => {
    let { list, selectedCategoryId, editCategoryId, parentIndex, isProjectEditing, enableEdit,
            selectCategory, open, close, add, remove, rename, tmpTitle } = props;

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
                                  editCategoryId={editCategoryId}
                                  isProjectEditing={isProjectEditing}
                                  tmpTitle={tmpTitle}
                                  enableEdit={enableEdit} >
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
                                                  editCategoryId={editCategoryId}
                                                  isProjectEditing={isProjectEditing}
                                                  tmpTitle={tmpTitle}
                                                  enableEdit={enableEdit} />
                                    : null
                            }
                        </Category>
                    );
                })
            }
        </ul>
    )

};