import React, { Component } from 'react';
import './styles.css';

export default class SearchForm extends Component {
    render() {

        return (
            <div>
                <div className="show-active">
                    <label htmlFor="check">Show active</label>
                    <input type="checkbox" id="check"/>
                </div>
                <form className="form-search" action="">
                    <input type="text"/>
                    <button className="clear">
                        <i className="fa fa-window-close">&nbsp;</i>
                    </button>
                </form>
            </div>
        );
    }
};