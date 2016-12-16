import React from 'react';
import classnames from 'classnames';
import './styles.css';

const ToggleSidebar = ({open, close, isOpen}) => {
    const toggle = () => (isOpen) ? close() : open();
    return (
        <button className={classnames("toggle-sidebar fa fa-bars", { active: isOpen })}
                onClick={toggle}
        >{' '}</button>
    );
};
export default ToggleSidebar;
