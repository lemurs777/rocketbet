import React from 'react';

import styles from './Modal.module.scss'
import {clsx} from "clsx";
import {ReactComponent as CloseIcon} from "../../assets/images/icons/close.svg";

const Modal = ({isOpen, setIsOpen, children}) => {
  return (
    <div className={clsx(styles.modal, `${isOpen ? [styles.modalActive] : ''}`)} onClick={() => setIsOpen(false)}>
      <div className={clsx(styles.modal__content, `${isOpen ? [styles.modalActiveContent] : ''}`)}
           onClick={e => e.stopPropagation()}>
        <button className={styles.modal__close} type='button' onClick={() => setIsOpen(false)}><CloseIcon/></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;