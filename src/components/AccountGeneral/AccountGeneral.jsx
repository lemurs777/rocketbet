

import React from 'react';
import styles from './AccountGeneral.module.scss'
import {clsx} from "clsx";
import Input from "../Input";

const AccountGeneral = () => {
  return (
    <div className={styles.general}>
      <div className={styles.general__head}>
        <h2 className={styles.general__title}>Email</h2>
        <div className={clsx(styles.general__status, 'confirm')}><span>(Confirmed)</span></div>
      </div>
      <div className={styles.general__input}>
        <Input label={'Your email address'} placeholder={'Your email address'}/>
      </div>
      <div className={styles.general__btns}>
        <button className={clsx(styles.btn, "btn btn--gradient")}>Save</button>
        <button className={clsx(styles.general__btnConfirm, styles.btn, "btn")}>resend confirmation email</button>
      </div>
    </div>
  );
};

export default AccountGeneral;