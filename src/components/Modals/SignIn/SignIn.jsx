import React, {useState} from 'react';
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/ai";
import styles from './SignIn.module.scss'
import signInImg from '../../../assets/images/modals/signIn.jpg'
import userImg from '../../../assets/images/icons/user.svg'
import mailImg from '../../../assets/images/icons/message.svg'
import passShowImg from '../../../assets/images/icons/passShow.svg'
import passHideImg from '../../../assets/images/icons/passHide.svg'
import Logo from "../../Logo";
import Input from "../../Input";
import {Link} from "react-router-dom";
import ButtonGradient from "../../Buttons/ButtonGradient";
import Modal from "../../Modal";
import Password from "../Password";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (<>
      <div className={styles.signIn}>
        <div className={styles.signIn__inner}>
          <div className={styles.signIn__left} style={{backgroundImage: `url(${signInImg})`}}>
            <div className={styles.signIn__leftInner}>
              <Logo/>
              <div className={styles.signIn__leftText}>
                <p>The best online <b>Crypto-Casino!</b></p>
              </div>
            </div>
          </div>
          <div className={styles.signIn__right}>
            <h4 className={styles.signIn__title}>Sign in to your account</h4>
            <div className={styles.signIn__subText}>
              <p>Already have an account? <span>Login</span></p>
            </div>
            <div className={styles.input}>
              <Input icon={userImg}
                     label={'Username or Email'}
                     placeholder={'Username or Email'}
              />
            </div>
            <div className={styles.input}>
              <Input icon={`${showPass ? passShowImg : passHideImg}`}
                     onClick={() => setShowPass(!showPass)}
                     type={`${!showPass ? 'password' : 'text'}`}
                     label={'Password'}
                     placeholder={'Password'}
              /></div>

            <div className={styles.button}>
              <Link to='/account/general'>
                <ButtonGradient>play now</ButtonGradient>
              </Link>
            </div>
            <div className={styles.text}>
              <button className={styles.loginBtn} onClick={() => setIsModalOpen(true)}>Forgot Your Password?</button>
            </div>
          </div>
        </div>
      </div>
      <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <Password></Password>
      </Modal>
    </>

  );
};

export default SignIn;