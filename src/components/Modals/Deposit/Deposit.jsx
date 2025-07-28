import React, { useEffect, useRef, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { clsx } from "clsx"
import styles from './Deposit.module.scss'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import btc from '../../../assets/images/currency/btc.svg'
import eth from '../../../assets/images/currency/eth.svg'
import ltc from '../../../assets/images/currency/ltc.svg'
import usdt from '../../../assets/images/currency/usdt.svg'
import bnb from '../../../assets/images/currency/bnb.svg'
import qr from '../../../assets/images/qr.jpg'
import Select from "react-select"
import Input from "../../Input"
import copy from '../../../assets/images/icons/copy.svg'
import Banner from "../../Banner"
import charapter from '../../../assets/images/banner/character.png'
import mc from '../../../assets/images/pay/mastercard.svg'
import visa from '../../../assets/images/pay/visa.svg'
import apay from '../../../assets/images/pay/apay.svg'
import gpay from '../../../assets/images/pay/gpay.svg'
import info from '../../../assets/images/icons/infoColor.svg'
import { ReactComponent as ArrowIcon } from "../../../assets/images/icons/arrow.svg"
import btcIcon from "../../../assets/images/currency/btc.svg"
import usdtIcon from "../../../assets/images/currency/usdt-2.svg"
import bnbIcon from "../../../assets/images/currency/bnb.svg"
import trxIcon from "../../../assets/images/currency/trx.svg"
import ethIcon from "../../../assets/images/currency/eth-2.svg"
import infoImg from "../../../assets/images/icons/infoColor.svg"

import qiwiImg from "../../../assets/images/currency/qiwi.svg"
import ymoImg from "../../../assets/images/currency/ymo.svg"
import sbpImg from "../../../assets/images/currency/sbp.png"
import kvirtumImg from "../../../assets/images/currency/kvintum.png"
import fkImg from "../../../assets/images/currency/fkwallet.png"
import bankImg from "../../../assets/images/currency/bank.svg"

import { Link } from "react-router-dom"
import ButtonGradient from "../../Buttons/ButtonGradient"
import cardImg from '../../../assets/images/icons/card.svg'
const Deposit = () => {
  const payCards = [
    {
      title: 'Credit card',
      image: cardImg,
      percent: 0,
      checked: true
    },
    {
      title: 'Credit card#2',
      image: cardImg,
      percent: 0
    }
  ]
  const payCardsWithdraw = [
    {
      title: 'QIWI',
      image: qiwiImg,
      percent: 6,
      checked: true
    },
    {
      title: 'Юmoney',
      image: ymoImg,
      percent: 0
    },
    {
      title: 'СПБ',
      image: sbpImg,
      percent: 0
    },
    {
      title: 'Kvitum',
      image: kvirtumImg,
      percent: 0
    },
    {
      title: 'FK Wallet',
      image: fkImg,
      percent: 0
    },
    {
      title: 'Internet Bank',
      image: bankImg,
      percent: 0
    },
  ]
  const wallets = [
    {
      title: 'Bitcoin',
      image: btcIcon,
      checked: true
    },
    {
      title: 'USDT TRC20',
      image: usdtIcon
    },
    {
      title: 'USDT ERC20',
      image: usdtIcon
    },
    {
      title: 'BNB',
      image: bnbIcon
    },
    {
      title: 'TRON',
      image: trxIcon
    },
    {
      title: 'Ethereum',
      image: ethIcon
    },
  ]

  const sums = [10, 50, 100, 300, 1000]
  const payList = [mc, visa, apay, gpay]
  const options = [
    { value: 'BTC', label: <div><img src={btc} height="30px" width="30px" />Chocolate </div> },
    { value: 'BTC', label: 'BTC' },
    { value: 'BTC', label: 'BTC' }
  ]
  const optionsWithdraw = [
    { value: 'low', label: 'low' },
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' }
  ]

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const [selectValue, setSelectValue] = useState('Your Bitcoin Balance ($13.000)')
  const depositList = [
    {
      icon: btc,
      title: 'BTC',
    },
    {
      icon: eth,
      title: 'ETH',
    },
    {
      icon: bnb,
      title: 'BNB',
    },
    {
      icon: usdt,
      title: 'USDT',
    },
  ]
  const currencyList = [
    {
      value: 'Your Bitcoin Balance ($13.000)',
      label: 'Your Bitcoin Balance ($13.000)',
    },
    {
      value: 'Your Bitcoin Balance ($13.000)',
      label: 'Your Bitcoin Balance ($13.000)',
    },
    {
      value: 'Your Bitcoin Balance ($13.000)',
      label: 'Your Bitcoin Balance ($13.000)',
    },
    {
      value: 'Your Bitcoin Balance ($13.000)',
      label: 'Your Bitcoin Balance ($13.000)',
    },
    {
      value: 'Your Bitcoin Balance ($13.000)',
      label: 'Your Bitcoin Balance ($13.000)',
    }
  ]
  const accordionCurrency = [
    {
      title: 'Bitcoin',
      icon: btc,
      currency: 397.00,
      inputs: [
        {
          text: 'Bitcoin Address',
          placeholder: 'Bitcoin Address'
        },
        {

          text: 'Amount',
          placeholder: 'Amount'
        }
      ]

    },
    {
      title: 'Ethereum',
      icon: eth,
      currency: 0.00,
      label: 'ETH'
    },
    {
      title: 'Litecoin',
      icon: ltc,
      currency: 777.00,
      label: 'LTC'
    },
    {
      title: 'Tether',
      icon: usdt,
      currency: 333.00,
      label: 'usdt'
    },
    {
      title: 'Binance Coin',
      icon: bnb,
      currency: 733.00,
      label: 'BNB'
    }
  ]
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])
  const [showMenu, setShowMenu] = useState(false)
  const wrapRef = useRef(null)
  const [useIcon, setUseIcon] = useState(depositList[0].icon)
  const [useCurrency, setUseCurrency] = useState(depositList[0].title)

  function handleClick(e) {
    if (wrapRef.current && !wrapRef.current.contains(e.target)) {
      setShowMenu(false)
    }
  }
  const [values, setValues] = useState(100)
  return (
    <>
      <div className={styles.modalTab}>

        <Tabs>
          <TabList className={clsx([styles.modalTabList])}>
            <Tab className={clsx([styles.modalTabBtn])} selectedClassName={styles.modalTabBtn__selected}>Deposit</Tab>
            <Tab className={clsx([styles.modalTabBtn])}
              selectedClassName={styles.modalTabBtn__selected}>Withdraw</Tab>
          </TabList>
          <TabPanel>
            <Tabs>
              <TabList className={clsx([styles.modalTabListSm])}>
                <Tab className={clsx([styles.modalTabBtnSm])} selectedClassName={styles.modalTabBtnSm__selected}>Credit card</Tab>
                <Tab className={clsx([styles.modalTabBtnSm])} selectedClassName={styles.modalTabBtnSm__selected}>Cryptocurrency</Tab>
                <Tab className={clsx([styles.modalTabBtnSm])} selectedClassName={styles.modalTabBtnSm__selected}>Wallets and more</Tab>
              </TabList>
              <TabPanel>
                <fieldset class={styles.checkboxBtns}>
                  {payCards.map((item, index) => {
                    return <div class="checkbox-btn" key={index}>
                      <label class="checkbox-btn__wrapper">
                        <input name='card' type="radio" class="checkbox-btn__input" defaultChecked={item.checked} />
                        <span class="checkbox-btn__tile">
                          <span class="checkbox-btn__icon">
                            <img src={item.image} alt={item.title} />
                          </span>
                          <div class="checkbox-btn__label">{item.title} <span>({item.percent}%)</span></div>
                        </span>
                      </label>
                    </div>
                  })}
                </fieldset>
                <div className={styles.deposit__inputIcon}>
                  <Input type={'number'} onChange={e => setValues(e.target.value)} valueN={values} />
                </div>
                <ul className={styles.deposit__sums}>
                  {sums.map(item => {
                    return <li
                      key={item}
                      onClick={() => setValues(item)}
                    >+{item}</li>
                  })}
                </ul>
                <div className={styles.modalTab__input}>
                  <Input type={'text'}
                    placeholder={'Enter the promo code'} />
                  <div className={styles.modalTab__inputInfo}>
                    <span><img src={infoImg} alt="" /> Commission: 0%</span>
                  </div>
                </div>
                <div className={styles.deposit__current}>Total to be paid: <span>100,00$</span></div>
                <div className={styles.btnWrap}> <button class={styles.deposit__btn}>Deposit</button></div>
              </TabPanel>
              <TabPanel>
                <fieldset class={styles.checkboxBtns}>
                  {wallets.map((item, index) => {
                    return <div class="checkbox-btn" key={index}>
                      <label class="checkbox-btn__wrapper">
                        <input name='card' type="radio" class="checkbox-btn__input" defaultChecked={item.checked} />
                        <span class="checkbox-btn__tile">
                          <span class="checkbox-btn__icon">
                            <img src={item.image} alt={item.title} />
                          </span>
                          <div class="checkbox-btn__label">{item.title}</div>
                        </span>
                      </label>
                    </div>
                  })}
                </fieldset>
                <div className={styles.deposit__qrWrapper}>

                  <div className={styles.deposit__qr}>
                    <img src={qr} alt="qr" />
                  </div>
                  <div className={styles.deposit__qrText}>
                    Please send only "<span>USDT (TRC20)</span>" to this address. Sending any other currency may result in loss of funds.
                  </div>
                </div>
                <div className={styles.modalTab__input}>
                  <Input icon={copy} label={'Your BTC deposit address'} type={'text'}
                    placeholder={'3PqMhR4VUmXqPit2wGLdbr4oMRLPRmmaxA'} />
                  <div className={styles.modalTab__inputInfo}>
                    <img src={info} alt="" />
                    <span>Min Deposit: 0.0006 BTC</span>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <fieldset class={styles.checkboxBtns}>
                  {payCardsWithdraw.map((item, index) => {
                    return <div class="checkbox-btn" key={index}>
                      <label class="checkbox-btn__wrapper">
                        <input name='card' type="radio" class="checkbox-btn__input" defaultChecked={item.checked} />
                        <span class="checkbox-btn__tile">
                          <span class="checkbox-btn__icon">
                            <img src={item.image} alt={item.title} />
                          </span>
                          <div class="checkbox-btn__label">{item.title} <span>({item.percent}%)</span></div>
                        </span>
                      </label>
                    </div>
                  })}
                </fieldset>
                <div className={styles.deposit__inputIcon}>
                  <Input type={'number'} onChange={e => setValues(e.target.value)} valueN={values} />
                </div>
                <ul className={styles.deposit__sums}>
                  {sums.map(item => {
                    return <li
                      key={item}
                      onClick={() => setValues(item)}
                    >+{item}</li>
                  })}
                </ul>
                <div className={styles.modalTab__input}>
                  <Input type={'text'}
                    placeholder={'Enter the promo code'} />
                  <div className={styles.modalTab__inputInfo}>
                    <span><img src={infoImg} alt="" /> Commission: 0%</span>
                  </div>
                </div>
                <div className={styles.deposit__current}>Total to be paid: <span>105,00$</span></div>
                <div className={styles.btnWrap}>  <button class={styles.deposit__btn}>Deposit</button></div>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList className={clsx([styles.modalTabListSm])}>
                <Tab className={clsx([styles.modalTabBtnSm])} selectedClassName={styles.modalTabBtnSm__selected}>Credit card</Tab>
                <Tab className={clsx([styles.modalTabBtnSm])} selectedClassName={styles.modalTabBtnSm__selected}>Cryptocurrency</Tab>
                <Tab className={clsx([styles.modalTabBtnSm])} selectedClassName={styles.modalTabBtnSm__selected}>Wallets and more</Tab>
              </TabList>
              <TabPanel>
                <fieldset class={styles.checkboxBtns}>
                  {payCards.map((item, index) => {
                    return <div class="checkbox-btn" key={index}>
                      <label class="checkbox-btn__wrapper">
                        <input name='card' type="radio" class="checkbox-btn__input" defaultChecked={item.checked} />
                        <span class="checkbox-btn__tile">
                          <span class="checkbox-btn__icon">
                            <img src={item.image} alt={item.title} />
                          </span>
                          <div class="checkbox-btn__label">{item.title} <span>({item.percent}%)</span></div>
                        </span>
                      </label>
                    </div>
                  })}
                </fieldset>
                <div className={styles.deposit__inputIcon}>
                  <Input type={'number'} defaultValue={'100'} />
                </div>
                <div className={clsx(styles.deposit__inputIcon)}>
                  <Input type={'number'} defaultValue={'100'} />
                </div>
                <div className={clsx(styles.deposit__input, styles.deposit__inputMb)}>
                  <Input type={'number'} defaultValue={'5019 7683 1089 0207'} />
                </div>
                <div className={clsx(styles.modalTab__input, styles.modalTab__inputNoMg)}>
                  <div className={clsx(styles.deposit__currentWith, styles.deposit__current)}>Total to be paid: <span>100,00$</span></div>
                  <div className={styles.modalTab__inputInfo}>
                    <span>Minimum withdrawal from bonus account: 300</span>
                  </div>
                </div>
                <div className={styles.btnWrap}>
                  <button class={clsx(styles.deposit__btn, styles.deposit__btnWith)}>Withdraw funds</button>
                </div>
              </TabPanel>
              <TabPanel>
                <fieldset class={styles.checkboxBtns}>
                  {wallets.map((item, index) => {
                    return <div class="checkbox-btn" key={index}>
                      <label class="checkbox-btn__wrapper">
                        <input name='card' type="radio" class="checkbox-btn__input" defaultChecked={item.checked} />
                        <span class="checkbox-btn__tile">
                          <span class="checkbox-btn__icon">
                            <img src={item.image} alt={item.title} />
                          </span>
                          <div class="checkbox-btn__label">{item.title}</div>
                        </span>
                      </label>
                    </div>
                  })}
                </fieldset>
                <div className={clsx(styles.modalTab__input, styles.modalTab__inputNoMg)}>
                  <Input icon={copy} label={'Your BTC deposit address'} type={'text'}
                    placeholder={'3PqMhR4VUmXqPit2wGLdbr4oMRLPRmmaxA'} />
                  <div className={styles.modalTab__inputInfo}>
                    <img src={info} alt="" />
                    <span>Min Deposit: 0.0006 BTC</span>
                  </div>
                </div>
                <div className={clsx(styles.deposit__inputIcon, styles.deposit__inputMb)}>
                  <Input type={'number'} placeholder={'100'} />
                </div>
                <div className={clsx(styles.modalTab__input, styles.modalTab__inputNoMg)}>
                  <div className={clsx(styles.deposit__currentWith, styles.deposit__current)}>Total: <span>101,00$</span></div>
                  <div className={styles.modalTab__inputInfo}>
                    <span>Minimum withdrawal from bonus account: 300</span>
                  </div>
                </div>

                <div className={styles.btnWrap}>  <button class={clsx(styles.deposit__btn, styles.deposit__btnWith)}>Withdraw funds</button></div>
              </TabPanel>
              <TabPanel>
                <fieldset class={styles.checkboxBtns}>
                  {payCardsWithdraw.map((item, index) => {
                    return <div class="checkbox-btn" key={index}>
                      <label class="checkbox-btn__wrapper">
                        <input name='card' type="radio" class="checkbox-btn__input" defaultChecked={item.checked} />
                        <span class="checkbox-btn__tile">
                          <span class="checkbox-btn__icon">
                            <img src={item.image} alt={item.title} />
                          </span>
                          <div class="checkbox-btn__label">{item.title} <span>({item.percent}%)</span></div>
                        </span>
                      </label>
                    </div>
                  })}
                </fieldset>
                <div className={styles.deposit__inputIcon}>
                  <Input type={'text'} placeholder={'Enter the amount of the withdrawal'} />
                </div>
                <div className={styles.deposit__inputIcon}>
                  <Input type={'text'} placeholder={'Your address'} />
                </div>
                <div className={styles.modalTab__input}>
                  <Input type={'text'}
                    placeholder={'Enter the promo code'} />
                  <div className={styles.modalTab__inputInfo}>
                    <span><img src={infoImg} alt="" /> Minimum withdrawal: 55</span>
                  </div>
                </div>
                <div className={clsx(styles.modalTab__input, styles.modalTab__inputNoMg)}>
                  <div className={clsx(styles.deposit__currentWith, styles.deposit__current)}>Total to be paid: <span>0,00$</span></div>
                  <div className={styles.modalTab__inputInfo}>
                    <span>Minimum withdrawal from bonus account: 300</span>
                  </div>
                </div>

                <div className={styles.btnWrap}>   <button class={clsx(styles.deposit__btn, styles.deposit__btnWith)}>Withdraw funds</button></div>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs >
      </div >
    </>
  )
}

export default Deposit
