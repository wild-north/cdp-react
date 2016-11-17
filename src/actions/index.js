import React, { Component } from 'react';
import './styles.css';

export default class Actions extends Component {
    render() {
        return (
            <div className="actions">
                <button><i className="fa fa-trash">&nbsp;</i></button>
                <button><i className="fa fa-plus-square">&nbsp;</i></button>
                <button><i className="fa fa-pencil-square-o">&nbsp;</i></button>
            </div>
        );
    }
};