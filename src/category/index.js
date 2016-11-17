import React, { Component, PropTypes } from 'react';
import './styles.css';
import Actions from '../actions'
import _ from 'lodash';

export default class Category extends Component {

    render() {
        const { children, title, index, parentIndex } = this.props;

        const fullIndex = (_.isNumber(parentIndex) ? parentIndex + '.' : '') + index;
        const id = 'cat-' + fullIndex;

        return (
            <li className="category">
                <div className="input-holder">
                    <label htmlFor={id}>{fullIndex}: {title}</label>
                    <input type="checkbox" id={id} />
                </div>
                <Actions/>
                {children}
            </li>
        );
    }
};

Category.propTypes = {
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    parentIndex: PropTypes.number
};