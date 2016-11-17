import React, { Component } from 'react';
import './styles.css';

export default class ToggleSidebar extends Component {
    render() {
        return (
            <button className="toggle-sidebar active">
                <i className="fa fa-bars">&nbsp;</i>
            </button>
        );
    }
};

