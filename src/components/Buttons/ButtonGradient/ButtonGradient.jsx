import React from 'react';
import styles from './ButtonGradient.module.scss'
import {clsx} from "clsx";
const ButtonGradient = ({children,type,onClick,className}) => {
  return (
    <button type={type} className={clsx(styles.buttonGradient,`${className}`)} onClick={onClick}>{children}</button>
  );
};

export default ButtonGradient;