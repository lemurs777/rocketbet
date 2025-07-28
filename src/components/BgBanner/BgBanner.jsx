import React from 'react';
import styles from './BgBanner.module.scss'

const BgBanner = ({text,image}) => {
  return (
    <div className={styles.bgBanner} style={{backgroundImage: `url(${image})`}}>
      <div className={styles.bgBanner__text}>{text}</div>
    </div>
  );
};

export default BgBanner;