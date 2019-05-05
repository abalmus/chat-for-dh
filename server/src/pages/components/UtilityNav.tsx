import React from 'react';
import { UtilityNavPropsI, UtilityNavItemI } from '../../types';

const UtilityNav = ({ navItems }: UtilityNavPropsI) => (
    <nav className="utility">
        {
            navItems.map(({url, extraClass, icon, title }: UtilityNavItemI, index: number) => (
                <a href={url} key={index} className={extraClass}>
                    <i className={icon} tabIndex={0} title={title}></i>
                </a>
            ))
        }
    </nav>
);

export default UtilityNav;
