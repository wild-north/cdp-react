import React, { Component } from 'react';
import './styles.css';

import AddItem from '../add-item';
import Category from '../category';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar active">
                <div className="row">
                    <div className="add-item-holder">
                        <AddItem placeholder="Enter category title"/>
                    </div>
                </div>
                <div className="categories-holder">
                    <ul>
                        <Category title="Frontend" index="1">
                            <ul>
                                <Category parentIndex={1} title="React" index={1}/>
                                <Category parentIndex={1} title="ES6" index={2}/>
                                <Category parentIndex={1} title="Redux" index={3}/>
                            </ul>
                        </Category>
                    </ul>
                </div>
            </div>
        );
    }
};