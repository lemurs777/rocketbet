import React from 'react';
import styles from './TitleBg.module.scss'

const TitleBg = ({children}) => {
  return (
    <div className={styles.title}>
      {children}
    </div>
  );
};

export default TitleBg;