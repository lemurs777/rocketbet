import React, {useState} from 'react';
import styles from "./HeaderAccount.module.scss";
import Logo from "../Logo";
import ButtonGradient from "../Buttons/ButtonGradient";
import Login from "../Login";
import Language from "../Language";
import Modal from "../Modal";
import ModalTab from "../Modals/ModalTab";
import UserDropDown from "../UserDropDown";
import AccountCurrency from "../AccountCurrency";
import {Link} from "react-router-dom";
import logoMobile from '../../assets/images/logo-mobile.svg'
import {clsx} from "clsx";

const HeaderAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  function handle (){
    setIsModalOpen(true)
  }
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__inner}>
            <div className={styles.header__logo}>
              <div className={clsx(styles.logo, 'desktop')}>
                <Logo/>
              </div>
              <Link className={clsx(styles.mobileLogo, 'mobile')} to='/'><img src={logoMobile} alt=""/></Link>
            </div>
            <div className={styles.header__balance}>
              <AccountCurrency onClick={handle}/>
            </div>
            <div className={styles.header__actions}>
              <UserDropDown/>
              <Language/>
            </div>
          </div>
        </div>
      </header>

      <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <ModalTab></ModalTab>
      </Modal>
    </>
  );
};

export default HeaderAccount;