import React from 'react';
import styles from './Input.module.scss'

const Input = ({type, placeholder, icon, label, onClick,id,onChange,valueN}) => {
  return (
    <div className={styles.inputItem}>
      <label>{label}</label>
      <div className={styles.inputItem__wrapper}>
        <input value={valueN} type={type} placeholder={placeholder} id={id} onChange={onChange}/>
        {icon && (
          <div className={styles.inputItem__icon} onClick={onClick}><img src={icon} alt="icon"/></div>
        )}
      </div>
    </div>
  );
};

export default Input;