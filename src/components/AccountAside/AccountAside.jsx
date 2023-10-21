import React, {useRef, useState} from 'react';
import styles from './AccountAside.module.scss'
import {NavLink} from "react-router-dom";

const AccountAside = () => {
  const asideList = [
    {
      title: 'General',
      path: './general',
      class:'active'
    },
    {
      title: 'Security',
      path: './security'
    },
    {
      title: 'Verification',
      path: './verification'
    },
    {
      title: 'Buy crypto',
      path: './buy-crypto'
    }
  ]


  return (
    <aside className={styles.aside}>
      <ul className={styles.aside__list}>
        {asideList.map(item => {
          return <li key={item.title}>
            <NavLink
              className='asideItem' to={item.path}
            >
              {item.title}
            </NavLink>
          </li>
        })}
      </ul>
    </aside>
  );
};

export default AccountAside;