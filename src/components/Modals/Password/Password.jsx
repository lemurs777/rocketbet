import React, {useState} from 'react';
import styles from './Password.module.scss'
import passwordImg from '../../../assets/images/modals/password.jpg'
import userImg from '../../../assets/images/icons/user.svg'
import Logo from "../../Logo";
import Input from "../../Input";
import ButtonGradient from "../../Buttons/ButtonGradient";
import Modal from "../../Modal";
import CreateAccount from "../CreateAccount";
import SendPw from "../SendPw";

const Password = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
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
            <h4 className={styles.password__title}>Recover Account </h4>
            <div className={styles.password__subText}>
              <p>Already have an account? <span>Login</span></p>
            </div>
            <div className={styles.input}>
              <Input icon={userImg}
                     label={'Username or Email'}
                     placeholder={'Username or Email'}
              />
            </div>
            <div className={styles.button}>
              <ButtonGradient onClick={() => setIsModalOpen(true)}>Recover password</ButtonGradient>
            </div>

          </div>
        </div>

      </div>
      <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <SendPw></SendPw>
      </Modal>
    </>

  );
};

export default Password;