import React, { Component } from 'react';
import './styles.css';


export default class Sidebar extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="sidebar active">{children}</div>
        );
    }
};