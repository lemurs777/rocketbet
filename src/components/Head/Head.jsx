import React from 'react';
import styles from "./Head.module.scss";
import {clsx} from "clsx";

const Head = ({icon, title, children}) => {
  return (
    <div className={styles.head}>
      <div className={styles.head__top}>
        <div className={styles.head__left}>
          <div className={styles.head__icon}>{icon}</div>
          <h2 className={styles.head__title}>{title}</h2>
        </div>
      </div>
      <div className={styles.head__right}>
        {children}
        {/*<button className={clsx([styles.head__btn], 'btn')} type="button">See all</button>*/}
      </div>
    </div>
  );
};

export default Head;