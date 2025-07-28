import React, {useState} from 'react';
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/ai";
import styles from './CreateAccount.module.scss'
import createAccountImg from '../../../assets/images/modals/creacteAccount.jpg'
import userImg from '../../../assets/images/icons/user.svg'
import mailImg from '../../../assets/images/icons/message.svg'
import passShowImg from '../../../assets/images/icons/passShow.svg'
import passHideImg from '../../../assets/images/icons/passHide.svg'
import Logo from "../../Logo";
import Input from "../../Input";
import {Link} from "react-router-dom";
import ButtonGradient from "../../Buttons/ButtonGradient";
import Modal from "../../Modal";
import SignIn from "../SignIn";

const CreateAccount = () => {
  const [showPass, setShowPass] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <div className={styles.createAccount}>
        <div className={styles.createAccount__inner}>
          <div className={styles.createAccount__left} style={{backgroundImage: `url(${createAccountImg})`}}>
            <div className={styles.createAccount__leftInner}>
              <Logo/>
              <div className={styles.createAccount__leftText}>
                <p>The best online <b>Crypto-Casino!</b></p>
              </div>
            </div>
          </div>
          <div className={styles.createAccount__right}>
            <h4 className={styles.createAccount__title}>Create an account</h4>
            <div className={styles.createAccount__subText}>
              <p>Enter your information to play now with RocketBet</p>
            </div>
            <div className={styles.input}>
              <Input icon={userImg}
                     label={'Username'}
                     placeholder={'Username'}
              /></div>
            <div className={styles.input}>
              <Input icon={mailImg}
                     type={'mail'}
                     label={'Email'}
                     placeholder={'Email'}
              /></div>
            <div className={styles.input}>
              <Input icon={`${showPass ? passShowImg : passHideImg}`}
                     onClick={() => setShowPass(!showPass)}
                     type={`${!showPass ? 'password' : 'text'}`}
                     label={'Password'}
                     placeholder={'Password'}
              /></div>
            <div className={styles.checkboxWrapper}>
              <Checkbox
                icon={<Icon.AiOutlineCheck color="#174A41" size={14}/>}
                name="my-input"
                checked={false}
                onChange={(value, event) => {
                  let p = {
                    isTrue: value,
                  };
                  return value;
                }}
                borderColor="#404F55"
                style={{cursor: "pointer", borderRadius: '2px'}}
                labelStyle={{marginLeft: 5, userSelect: "none"}}
                label={`By ticking the box you indicate that you have read and acknowledge  Terms of Service`}
                labelClassName={styles.checkbox}
              />
            </div>
            <div className={styles.button}>
              <ButtonGradient>play now</ButtonGradient>
            </div>
            <div className={styles.text}>
              Already have an account? <button className={styles.loginBtn}
                                               onClick={() => setIsModalOpen(true)}>Login</button>
            </div>
          </div>
        </div>

      </div>
      <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <SignIn></SignIn>
      </Modal>
    </>
  );
};

export default CreateAccount;