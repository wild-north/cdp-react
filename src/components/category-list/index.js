import React from 'react';
import './styles.css';
import Category from '../category';
import categoryConnector from '../category/connector';
import { getFullIndex } from '../../helpers';

const CategoryConnected = categoryConnector(Category);

export const CategoryList = ({ list, editCategoryId, parentIndex }) => (
    <ul>
        {
            list.map((item, key) => {
                const fullIndex = getFullIndex(parentIndex, key + 1);
                return (
                    <CategoryConnected key={key} item={item} index={fullIndex} >
                        {
                            item.kids && item.kids.length
                                ? <CategoryList list={item.kids} parentIndex={fullIndex} editCategoryId={editCategoryId}/>
                                : null
                        }
                    </CategoryConnected>
                );
            })
        }
    </ul>
);