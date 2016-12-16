import React from 'react';
import { map } from 'lodash';
import './styles.css';
// import Category from '../category';
// import {SEPARATOR} from '../../constants';

const CategoryList = (props) => {
    let {list
        // , selectedCategoryId, routeParams, selectCategory, open, close, add, remove, rename
    } = props;


    function getList (list) {
        return map(list, (value, key) => {
            console.log(value, key);
            return value;
        });
    }
    getList(list);

    return (
      <ul>
        {/*{*/}
          {/*list.map((item, key) => {*/}

            {/*return (*/}
              {/*<Category key={key}*/}
                        {/*index={fullIndex}*/}
                        {/*item={item}*/}
                        {/*toggle={toggle}*/}
                        {/*remove={remove}*/}
                        {/*rename={rename}*/}
                        {/*add={add}*/}
                        {/*selectCategory={selectCategory}*/}
                        {/*routeParams={routeParams}*/}
              {/*>*/}
                {/*{*/}
                  {/*item.kids && item.kids.length ?*/}
                    {/*<CategoryList list={item.kids}*/}
                                  {/*parentIndex={fullIndex}*/}
                                  {/*toggle={toggle}*/}
                                  {/*remove={remove}*/}
                                  {/*rename={rename}*/}
                                  {/*add={add}*/}
                                  {/*selectCategory={selectCategory}*/}
                                  {/*routeParams={routeParams}*/}
                    {/*/>*/}
                    {/*: null*/}
                {/*}*/}
              {/*</Category>*/}
            {/*);*/}
          {/*})*/}
        {/*}*/}
      </ul>
    )

};

export default CategoryList;
