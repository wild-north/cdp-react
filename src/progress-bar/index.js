import React, { Component } from 'react';
import './styles.css';

export default class ProgressBar extends Component {
    render() {
        const { progress } = this.props;

        return (
            <div className="progress-bar">
                <div className="progress" style={{
                    width: `${progress}%`
                }}></div>
            </div>
        );
    }
};