import React from 'react';
import CategoryComponent from '../category';
import categoryConnector from '../category/connector';
import { getFullIndex } from '../../helpers';

const Category = categoryConnector(CategoryComponent);

const CategoryList = ({ list, parentIndex }) => (
    <ul>
        {
            list.map((item, key) => {
                const fullIndex = getFullIndex(parentIndex, key + 1);
                return (
                    <Category key={key} item={item} index={fullIndex} >
                        {
                            item.kids && item.kids.length
                                ? <CategoryList list={item.kids} parentIndex={fullIndex}/>
                                : null
                        }
                    </Category>
                );
            })
        }
    </ul>
);

export default CategoryList;