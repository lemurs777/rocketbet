import React from 'react';

import styles from './MenuCenter.module.scss'

import db from '../../assets/database/MenuDB'
import {NavLink} from "react-router-dom";

const MenuCenter = () => {
  return (
    <div className={styles.menuCenter}>
      <div className={styles.menuCenter__inner}>
        <ul className={styles.menuCenter__list}>
          {db.map((props,index) => (
            <li key={index}>
              <NavLink className={styles.menuCenterItem} to={props.link} >
                {props.icon}
                {props.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuCenter;