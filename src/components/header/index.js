import React from 'react';
import SearchForm from '../search-form';
import ToggleSidebar from '../sidebar/toggle-sidebar';
import logo from './logo.svg';
import './styles.css';


const Header = (props) => {
    return (
        <header>
            <div className="button-holder">
                <ToggleSidebar open={props.openSidebar}
                               close={props.closeSidebar}
                               isOpen={props.isSidebarOpen} />
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
};

export default Header;