import React from 'react';
import classnames from 'classnames';
import './styles.css';

const Sidebar = ({ children, isSidebarOpen }) => (
    <div className={ classnames("sidebar", { active: isSidebarOpen }) }>{children}</div>
);

export default Sidebar;