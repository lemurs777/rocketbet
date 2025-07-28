import React, {useState} from 'react';
import {clsx} from 'clsx';

import styles from './Login.module.scss'

import {ReactComponent as KeyImg} from '../../assets/images/icons/key.svg'
import Modal from "../Modal";
import CreateAccount from "../Modals/CreateAccount/CreateAccount";
import SignIn from "../Modals/SignIn";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false)
  return (
    <div className={styles.login}>
      <div className={styles.login__btns}>
        <button className={clsx([styles.login__btn], 'btn')} onClick={() => setIsModalOpenLogin(true)} > Sign In</button>
          <button className={clsx([styles.login__btn], 'btn btn--gradient')} onClick={() => setIsModalOpen(true)}>
          <KeyImg/> Sign up
        </button>
      </div>
      <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <CreateAccount></CreateAccount>
      </Modal>
      <Modal setIsOpen={setIsModalOpenLogin} isOpen={isModalOpenLogin}>
        <SignIn></SignIn>
      </Modal>
    </div>
  );
};

export default Login;