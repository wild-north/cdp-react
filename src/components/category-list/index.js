import React, { Component } from 'react';
import './styles.css';
import Category from '../category';

export default class CategoryList extends Component {
    render() {
        let { list = [], parentIndex = '' } = this.props;
        return (
            <ul>
                { list.map(({title, children}, key) => {
                    const index = key + 1;
                    const fullIndex = parentIndex ? parentIndex + '.' + index : index;

                    return (
                        <Category key={key} index={fullIndex} title={title}>
                            { children && children.length ? <CategoryList list={children} parentIndex={fullIndex}/> : null }
                        </Category>
                    );
                }) }
            </ul>
        )
    }

};