import React from 'react';

import styles from './GameBlock.module.scss'
import {clsx} from "clsx";

const GameBlock = ({icon, title, children}) => {
  return (
    <div className={styles.gameBlock}>
      <div className={styles.gameBlock__top}>
        <div className={styles.gameBlock__head}>
          <div className={styles.gameBlock__icon}>{icon}</div>
          <h2 className={styles.gameBlock__title}>{title}</h2>
        </div>
        <button className={clsx([styles.gameBlock__btn], 'btn btn--see')} type="button">See all</button>
      </div>
      <div className={styles.gameBlock__items}>
        {children}
      </div>
    </div>

  );
};

export default GameBlock;