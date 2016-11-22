import React, { Component } from 'react';
import './styles.css';
import Category from '../category';

export default class CategoryList extends Component {
    render() {
        let { list = [], parentIndex = '' } = this.props;
        return (
            <ul>
                { list.map(({index, title, children}, key) => {
                    const currentIndex = parentIndex ? parentIndex + '.' + index : index;
                    return (
                        <Category key={key} index={currentIndex} title={title}>
                            { children && children.length ? <CategoryList list={children} parentIndex={currentIndex}/> : null }
                        </Category>
                    );
                }) }
            </ul>
        )
    }

};