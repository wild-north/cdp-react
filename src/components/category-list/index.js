import React, {Component} from 'react';
import './styles.css';
import Category from '../category';
import {SEPARATOR} from '../../constants';

export default class CategoryList extends Component {

  render() {
    let {list, parentIndex = '', toggle, remove, rename, add, selectCategory, routeParams} = this.props;

    return (
      <ul>
        {
          list.map((item, key) => {
            const index = key + 1;
            const fullIndex = parentIndex ? `${parentIndex}${SEPARATOR}${index}` : index;

            return (
              <Category key={key}
                        index={fullIndex}
                        item={item}
                        toggle={toggle}
                        remove={remove}
                        rename={rename}
                        add={add}
                        selectCategory={selectCategory}
                        routeParams={routeParams}
              >
                {
                  item.kids && item.kids.length ?
                    <CategoryList list={item.kids}
                                  parentIndex={fullIndex}
                                  toggle={toggle}
                                  remove={remove}
                                  rename={rename}
                                  add={add}
                                  selectCategory={selectCategory}
                                  routeParams={routeParams}
                    />
                    : null
                }
              </Category>
            );
          })
        }
      </ul>
    )
  }

};