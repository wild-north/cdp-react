import React, { Component } from 'react';
import './styles.css';

export default class AddItem extends Component {

    render() {
        const { placeholder } = this.props;
        return (
            <div className="add-item">
                <form action="">
                    <input type="text" placeholder={placeholder} />
                    <button><i className="fa fa-plus-square">&nbsp;</i></button>
                </form>
            </div>
        );
    }
};