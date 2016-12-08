import React, { Component } from 'react';
import './styles.css';
import Category from '../category';
import { SEPARATOR } from '../../constants';


export default class CategoryList extends Component {

    render() {
        let { list, rootList, parentIndex = '', toggle, remove, rename, add} = this.props;

        rootList = rootList || list;

        return (
            <ul>
                {
                    list.map(({title, kids, opened}, key) => {
                        const index = key + 1;
                        const fullIndex = parentIndex ? `${parentIndex}${SEPARATOR}${index}` : index;

                        return (

                            <Category key={key}
                                      rootList={rootList}
                                      index={fullIndex}
                                      title={title}
                                      opened={opened}
                                      toggle={toggle}
                                      remove={remove}
                                      rename={rename}
                                      add={add} >
                                {
                                    kids && kids.length ?
                                        <CategoryList rootList={rootList}
                                                      list={kids}
                                                      parentIndex={fullIndex}
                                                      toggle={toggle}
                                                      remove={remove}
                                                      rename={rename}
                                                      add={add}
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