import React from 'react';
import SearchForm from '../../components/search-form';
import ToggleSidebar from '../../components/sidebar/toggle-sidebar';
import logo from './logo.svg';
import './styles.css';
import ProgressBar from '../../components/progress-bar';

const Header = (props) => {
    const { openSidebar, closeSidebar, isSidebarOpen, progress } = props;
    return (
        <header>
            <div className="button-holder">
                <ToggleSidebar open={openSidebar}
                               close={closeSidebar}
                               isOpen={isSidebarOpen} />
            </div>
            <strong className="logo">
                <img src={logo} alt="logo"/>
                To-Do List
            </strong>
            <div className="search-holder">
                <SearchForm/>
            </div>
            <ProgressBar progress={progress}/>
        </header>
    );
};

export default Header;