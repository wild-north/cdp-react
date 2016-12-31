import React, { Component } from 'react';
import './styles.css';

const SearchForm = () => (
    <div className="search-form disabled">
        <div className="show-active">
            <label htmlFor="check">Show active</label>
            <input type="checkbox" id="check"/>
        </div>
        <form className="form-search" action="">
            <input type="text" placeholder="Will be done in next sprint"/>
            <button className="clear fa fa-window-close-o">{' '}</button>
        </form>
    </div>
);

export default SearchForm;