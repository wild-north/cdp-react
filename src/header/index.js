import React, { Component } from 'react';
import './styles.css';
import ProgressBar from '../progress-bar';
import SearchForm from '../search-form';
import ToggleSidebar from '../sidebar/toggle-sidebar';
import logo from '../logo.svg';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="row">
                    <ToggleSidebar/>
                    <strong>
                        <img src={logo} alt="logo" className="logo"/>
                        To-Do List
                    </strong>
                    <div className="search-holder">
                        <SearchForm/>
                    </div>
                </div>
                <ProgressBar progress={10}/>
            </header>
        );
    }
};