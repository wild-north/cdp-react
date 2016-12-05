import React, { Component } from 'react';
import './styles.css';
import Category from '../category';

export const SEPARATOR = '.';

export default class CategoryList extends Component {

    render() {
        let { list = [], parentIndex = '', toggleOpened} = this.props;

        let parentList = this.props.parentList ? this.props.parentList : this.props.list;

        return (
            <ul>
                {
                    list.map(({title, kids, opened}, key) => {
                        const index = key + 1;
                        const fullIndex = parentIndex ? `${parentIndex}${SEPARATOR}${index}` : index;

                        return (
                            <Category key={key} parentList={parentList} index={fullIndex} title={title} opened={opened} toggleOpened={toggleOpened}>
                                {
                                    kids && kids.length ?
                                        <CategoryList parentList={parentList} list={kids} parentIndex={fullIndex} toggleOpened={toggleOpened}/>
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