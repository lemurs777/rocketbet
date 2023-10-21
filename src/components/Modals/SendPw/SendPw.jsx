import React, {useState} from 'react';
import styles from './SendPw.module.scss'
import passwordImg from '../../../assets/images/modals/password.jpg'
import Logo from "../../Logo";
import {ReactComponent as SendIcon} from "../../../assets/images/modals/send.svg";

const SendPw = () => {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className={styles.password}>
      <div className={styles.password__inner}>
        <div className={styles.password__left} style={{backgroundImage: `url(${passwordImg})`}}>
          <div className={styles.password__leftInner}>
            <Logo/>
            <div className={styles.password__leftText}>
              <p>The best online <b>Crypto-Casino!</b></p>
            </div>
          </div>
        </div>
        <div className={styles.password__right}>
          <h4 className={styles.password__title}>Sent to email</h4>
          <div className={styles.password__subText}>
            <p>Check your email</p>
          </div>
          <div className={styles.password__icon}>
            <SendIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendPw;