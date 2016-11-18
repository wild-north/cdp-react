import React, { Component } from 'react';
import './styles.css';
import SearchForm from '../search-form';
import ToggleSidebar from '../sidebar/toggle-sidebar';
import logo from '../logo.svg';


export default class Header extends Component {
    render() {
        return (
            <header>
                    <div className="button-holder">
                        <ToggleSidebar/>
                    </div>
                    <strong className="logo">
                        <img src={logo} alt="logo"/>
                        To-Do List
                    </strong>
                    <div className="search-holder">
                        <SearchForm/>
                    </div>
            </header>
        );
    }
};