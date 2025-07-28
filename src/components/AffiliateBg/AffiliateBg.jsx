import React from 'react';

import styles from './AffiliateBg.module.scss'

const AffiliateBg = ({title, text, image, children}) => {
  return (
    <div className={styles.affiliate} style={{backgroundImage: `url(${image})`}}>
      <div className={styles.affiliate__content}>
        <div className={styles.affiliate__title}>{title}</div>
        <div className={styles.affiliate__text}>{text}</div>
        {children}
      </div>
    </div>
  );
};

export default AffiliateBg;