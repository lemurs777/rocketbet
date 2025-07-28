import React, { useState } from 'react'

import styles from './Header.module.scss'

import Logo from "../Logo"
import Login from "../Login"
import Language from "../Language"
import ButtonGradient from "../Buttons/ButtonGradient"
import Modal from "../Modal"
import CreateAccount from "../Modals/CreateAccount/CreateAccount"
import Deposit from "../Modals/Deposit"
import { Link } from 'react-router-dom'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__inner}>
            <div className={styles.header__logo}>
              <Logo />
            </div>
            <div className={styles.header__actions}>
              <ButtonGradient onClick={() => setIsModalOpen(true)}>Modal Deposit</ButtonGradient>
              <ButtonGradient><Link to='/crash'>Crash</Link></ButtonGradient>
              <Login />
              <Language />
            </div>
          </div>
        </div>
      </header>
      <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <Deposit></Deposit>
      </Modal>
    </>
  )
}

export default Header