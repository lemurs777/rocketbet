import React, {useEffect, useRef, useState} from 'react';
import styles from './SideBar.module.scss'
import db from '../../assets/database/SideBarDB'
import {Link, NavLink} from "react-router-dom";

import {ReactComponent as ArrowIcon} from "../../assets/images/icons/arrow.svg";
import {clsx} from "clsx";

const SideBarSubMenu = ({item, index, onClick,subMenu}) => {
  const [subNav, setSubNav] = useState(false)
  const [notShow, setNotShow] = useState(false)

  function showMenu(e) {
    setSubNav(!subNav)
  }

  return (
    <>
      <li key={index} onClick={onClick}>
        <NavLink to={item.link} className={clsx('sidebarLink', styles.sidebarItem)} onClick={showMenu}>
          <div className={styles.sidebarItem__icon}>{item.icon}</div>
          <span className={styles.sidebarItem__text}>{item.title}</span>
          <div className={styles.arrowIcon}>
            {item.submenu && <ArrowIcon/>}
          </div>
        </NavLink>

        {subMenu && (

          <ul className={clsx(`${subNav ? styles.active : ''} `)}>
            {item.submenu && (
              item.submenu.map((i, index) => {
                return <li key={index}>
                  <Link className={styles.sidebarItemBottom} to='#'>{i.subtitle}</Link>
                </li>
              })
            )}
          </ul>
        )}

      </li>
    </>
  )

};

export default SideBarSubMenu;