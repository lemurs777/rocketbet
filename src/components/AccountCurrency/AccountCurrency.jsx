import React, {useEffect, useRef, useState} from 'react';

import styles from './AccountCurrency.module.scss'
import ButtonGradient from "../Buttons/ButtonGradient";
import {ReactComponent as PlusIcon} from "../../assets/images/icons/plus.svg";
import btc from "../../assets/images/currency/btc.svg";
import eth from "../../assets/images/currency/eth.svg";
import bnb from "../../assets/images/currency/bnb.svg";
import usdt from "../../assets/images/currency/usdt.svg";
import {ReactComponent as WalletIcon} from "../../assets/images/user/wallet.svg";
import {clsx} from "clsx";
import Modal from "../Modal";
import ModalTab from "../Modals/ModalTab";

const AccountCurrency = ({onClick}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currencyList = [
    {
      icon: btc,
      amount: '$397.00',
    },
    {
      icon: eth,
      amount: '$37.00',
    },
    {
      icon: bnb,
      amount: '$97.00',
    },
    {
      icon: usdt,
      amount: '$39.00',
    },
  ]

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, []);
  const [showMenu, setShowMenu] = useState(false)
  const wrapRef = useRef(null)
  const [useIcon, setUseIcon] = useState(currencyList[0].icon)
  const [useCurrency, setUseCurrency] = useState(currencyList[0].amount)

  function handleClick(e) {
    if (wrapRef.current && !wrapRef.current.contains(e.target)) {
      setShowMenu(false)
    }
  }


  return (
    <>
      <div className={styles.currency}>
        <div className={styles.select} ref={wrapRef}>
          <button className={styles.select__btn} onClick={() => setShowMenu(!showMenu)}>
            <img src={useIcon} alt=""/>
            <span>{useCurrency}</span>
          </button>
          <ul className={clsx(styles.select__list, !showMenu ? '' : styles.show)}>
            {currencyList.map((currency, index) => {
              return <li key={index} className={styles.selectItem} onClick={() => {
                setUseIcon(currency.icon)
                setUseCurrency(currency.amount)
                setShowMenu(false)
              }}>
                <img src={currency.icon} alt="icon"/>
                <span>{currency.amount}</span>
              </li>
            })}
          </ul>
        </div>
        <ButtonGradient className={styles.currency__btn}
                        onClick={onClick}
        >
          <div className="desktop">
            <PlusIcon/>
          </div>
          <div className="mobile">
            <WalletIcon/>
          </div>

          <span>Deposit</span>
        </ButtonGradient>
      </div>


      <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen}>
        <ModalTab></ModalTab>
      </Modal>

    </>
  );
};

export default AccountCurrency;
