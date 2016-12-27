import React from 'react';
import './styles.css';
import Category from '../category';
import { getFullIndex } from '../../helpers';

export const CategoryList = ({ list, editCategoryId, parentIndex }) => (
    <ul>
        {
            list.map((item, key) => {
                const fullIndex = getFullIndex(parentIndex, key + 1);
                return (
                    <Category key={key} item={item} index={fullIndex} editCategoryId={editCategoryId}>
                        {
                            item.kids && item.kids.length
                                ? <CategoryList list={item.kids} parentIndex={fullIndex} editCategoryId={editCategoryId}/>
                                : null
                        }
                    </Category>
                );
            })
        }
    </ul>
);