import React, {useEffect, useRef, useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {clsx} from "clsx";
import styles from './ModalTab.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import btc from '../../../assets/images/currency/btc.svg'
import eth from '../../../assets/images/currency/eth.svg'
import ltc from '../../../assets/images/currency/ltc.svg'
import usdt from '../../../assets/images/currency/usdt.svg'
import bnb from '../../../assets/images/currency/bnb.svg'
import qr from '../../../assets/images/qr.jpg'
import Select from "react-select";
import Input from "../../Input";
import copy from '../../../assets/images/icons/copy.svg'
import Banner from "../../Banner";
import charapter from '../../../assets/images/banner/character.png'
import mc from '../../../assets/images/pay/mastercard.svg'
import visa from '../../../assets/images/pay/visa.svg'
import apay from '../../../assets/images/pay/apay.svg'
import gpay from '../../../assets/images/pay/gpay.svg'
import info from '../../../assets/images/icons/infoColor.svg'
import {ReactComponent as ArrowIcon} from "../../../assets/images/icons/arrow.svg";
import {Link} from "react-router-dom";
import ButtonGradient from "../../Buttons/ButtonGradient";

const ModalTab = () => {
  const payList = [mc, visa, apay, gpay]
  const options = [
    {value: 'BTC', label: <div><img src={btc} height="30px" width="30px"/>Chocolate </div>},
    {value: 'BTC', label: 'BTC'},
    {value: 'BTC', label: 'BTC'}
  ]
  const optionsWithdraw = [
    {value: 'low', label: 'low'},
    {value: 'High', label: 'High'},
    {value: 'Medium', label: 'Medium'}
  ]

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
  }, []);
  const [showMenu, setShowMenu] = useState(false)
  const wrapRef = useRef(null)
  const [useIcon, setUseIcon] = useState(depositList[0].icon)
  const [useCurrency, setUseCurrency] = useState(depositList[0].title)

  function handleClick(e) {
    if (wrapRef.current && !wrapRef.current.contains(e.target)) {
      setShowMenu(false)
    }
  }

  return (
    <>
      <div className={styles.modalTab}>

        <Tabs>
          <TabList className={clsx([styles.modalTabList])}>
            <Tab className={clsx([styles.modalTabBtn])} selectedClassName={styles.modalTabBtn__selected}>Deposit</Tab>
            <Tab className={clsx([styles.modalTabBtn])} selectedClassName={styles.modalTabBtn__selected}>Buy
              Crypto</Tab>
            <Tab className={clsx([styles.modalTabBtn])}
                 selectedClassName={styles.modalTabBtn__selected}>Withdraw</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.deposit}>
              <div className={styles.deposit__row}>
                <div className={styles.deposit__col}>
                  <div className={styles.title}>
                    Deposit
                  </div>
                  <div className={styles.deposit__text}>
                    <p>Select the currency of your choice and copy the corresponding deposit address to your external
                      wallet. Your funds will be available as soon as they pass through the necessary confirmations.</p>
                  </div>
                </div>
                <div className={styles.deposit__qr}>
                  <img src={qr} alt="qr"/>
                </div>
              </div>

              <div className={styles.select} ref={wrapRef}>
                <button className={styles.select__btn} onClick={() => setShowMenu(!showMenu)}>
                  <img src={useIcon} alt=""/>
                  <span>{useCurrency}</span>
                </button>
                <ul className={clsx(styles.select__list, !showMenu ? '' : styles.show)}>
                  {depositList.map((currency, index) => {
                    return <li key={index} className={styles.selectItem} onClick={() => {
                      setUseIcon(currency.icon)
                      setUseCurrency(currency.title)
                      setShowMenu(false)
                    }}>
                      <img src={currency.icon} alt="icon"/>
                      <span>{currency.title}</span>
                    </li>
                  })}
                </ul>
              </div>

              <div className={styles.modalTab__input}>
                <Input icon={copy} label={'Your BTC deposit address'} type={'text'}
                       placeholder={'3PqMhR4VUmXqPit2wGLdbr4oMRLPRmmaxA'}/>
                <div className={styles.modalTab__inputInfo}>
                  <img src={info} alt=""/>
                  <span>Min Deposit: 0.0006 BTC</span>
                </div>
              </div>
              <div className={styles.depositBanner}>
                <div className={styles.depositBanner__inner}>
                  <div className={styles.depositBanner__content}>
                    <h6 className={styles.depositBanner__title}>Buy Crypto in Seconds</h6>
                    <div className={styles.depositBanner__text}>
                      <p>
                        Buy crypto instantly, and have
                        it automatically transferred to
                        your “Rocketbet” balance.
                      </p>
                    </div>
                  </div>
                  <div className={styles.depositBanner__right}>

                    <div className={styles.depositBanner__img}>
                      <img src={charapter} alt='character'/>
                    </div>
                    <div className={styles.depositBanner__row}>
                      <ul className={styles.depositBanner__pay}>
                        {payList.map((item, index) => (
                          <li key={index}><img src={item} alt="pay"/></li>
                        ))}
                      </ul>
                      <button className={clsx(styles.depositBanner__btn, 'btn btn--gradient')}>Buy crypto</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.crypto}>
              <div className={styles.deposit__row}>
                <div className={styles.deposit__col}>
                  <div className={styles.title}>
                    Deposit
                  </div>
                  <div className={styles.deposit__text}>
                    <p>Select the currency of your choice and copy the corresponding deposit address to your external
                      wallet. Your funds will be available as soon as they pass through the necessary confirmations.</p>
                  </div>
                </div>
              </div>
              <div className={styles.modalTab__input}>
                <Input label={'Amount'} type={'text'}
                       placeholder={'$397.00'}/>
                <div className={styles.modalTab__inputInfo}>
                  <span>Min $50, Max $12,000</span>
                </div>
              </div>
              <div className={styles.withdrawSelect}>
                <label className={styles.withdrawSelect__label}>Priority</label>
                <Select
                  defaultValue={currencyList[0]}
                  options={currencyList}
                  classNamePrefix='withdrawSelect'
                />
              </div>
              <button className={clsx(styles.crypto__btn, 'btn btn--gradient')}>Buy Crypto with MoonPay</button>
              {/*<ButtonGradient className={clsx(styles.btn)}>Buy Crypto with MoonPay</ButtonGradient>*/}
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.wrapper}>
              <h6 className={styles.title}>Withdraw funds</h6>
              <div className={styles.accordionWrap}>
                {accordionCurrency.map((item, index) => (
                  <Accordion key={item.title} className={styles.accordion}
                             expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ArrowIcon/>}
                      aria-controls="panel-content"
                      id={index}
                      className={styles.accordionSummary}
                    >
                      <div className={styles.accordionBtn}>
                        <div className={styles.accordionBtn__img}><img src={item.icon} alt={item.title}/></div>
                        <h6
                          className={clsx([styles.accordionBtn__title], `${item.currency === 0 ? 'empty' : ''}`)}>{item.title}</h6>
                        {item.label && (
                          <div className={styles.accordionBtn__label}>
                            <span>({item.label})</span>
                          </div>
                        )}
                        <div
                          className={clsx(styles.accordionBtn__currency, `${item.currency === 0 ? 'zero' : ''}`)}>${item.currency.toFixed(2)}</div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                      <Input label={'Bitcoin Address'} placeholder={'Bitcoin Address'}/>
                      <Input label={'Amount'} placeholder={'Amount'}/>
                      <div className={styles.withdrawSelect}>
                        <label className={styles.withdrawSelect__label}>Priority</label>
                        <Select
                          defaultValue={optionsWithdraw[1]}
                          options={optionsWithdraw}
                          classNamePrefix='withdrawSelect'
                        />
                      </div>
                      <div className={styles.modalTab__descr}>
                        <p><span>$0.296</span></p>
                        <p>Estimated Transaction Fee</p>
                        <p>By withdrawing, you confirm you have read and accepted the <Link to='/privacy'>Payment
                          Policy.</Link></p>
                      </div>
                      <ButtonGradient className={clsx(styles.btn)}>Withdraw funds</ButtonGradient>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ModalTab;
