import React from 'react';
import {Link} from "react-router-dom";

import styles from './Studios.module.scss'

const Studios = ({title, image, amount}) => {
  return (
    <Link to='' className={styles.studiosItem}>
      <div className={styles.studiosItem__img}>
        {image}
      </div>
      <div className={styles.studiosItem__bottom}>
        <h5 className={styles.studiosItem__title}>{title}</h5>
        <div className={styles.studiosItem__amount}>&nbsp;({amount})</div>
      </div>
    </Link>
  );
};

export default Studios;