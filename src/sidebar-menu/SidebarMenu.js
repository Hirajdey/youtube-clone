import React from 'react';
import classNames from "classnames";
import Styles from './SidebarMenu.module.scss';

const SidebarMenu = ({selected, Icon, title}) => {
    return (
        <div className={classNames(Styles.main, selected && Styles.selected)}>
            <span><Icon className={Styles.icon}/></span>
            <span>{title}</span>
        </div>
    )
}

export default SidebarMenu
