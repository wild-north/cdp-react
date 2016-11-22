import React, { Component } from 'react';
import './styles.css';
import Category from '../category';

export default class CategoryList extends Component {

    render() {
        return (
            <ul>
                <Category title="Frontend" index="1">
                    <ul>
                        <Category parentIndex={1} title="React" index={1}/>
                        <Category parentIndex={1} title="ES6" index={2}/>
                        <Category parentIndex={1} title="Redux" index={3}/>
                    </ul>
                </Category>
            </ul>
        );
    }
};