import React from 'react';
import styles from './Textarea.module.scss'

const Teaxtarea = ({placeholder, icon, label}) => {
  return (
    <div className={styles.textareaItem}>
      <label>{label}</label>
      <textarea placeholder={placeholder}/>
    </div>
  );
};

export default Teaxtarea;