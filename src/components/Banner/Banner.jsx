import React from 'react';

import styles from './Banner.module.scss'

import mc from '../../assets/images/pay/mastercard.svg'
import visa from '../../assets/images/pay/visa.svg'
import apay from '../../assets/images/pay/apay.svg'
import gpay from '../../assets/images/pay/gpay.svg'
import character from '../../assets/images/banner/character.png'
import {clsx} from "clsx";

const Banner = () => {
  const payList = [mc, visa, apay, gpay]
  return (
    <div className={styles.banner}>
      <div className={styles.banner__character}>
        <img src={character} alt="Character"/>
      </div>
      <div className={styles.banner__wrapper}>
        <div className={styles.banner__inner}>
          <div className={styles.banner__content}>
            <h5 className={styles.banner__title}>Buy Crypto in Seconds</h5>
            <div className={styles.banner__text}>
              <p>
                Buy crypto instantly, and have it automatically
                transferred to your “Rocketbet” balance.
              </p>
            </div>
          </div>
          <ul className={styles.banner__payList}>
            {payList.map((item, index) => (
              <li key={index} className={styles.bannerPayItem}>
                <img src={item} alt="Pay"/>
              </li>
            ))}
          </ul>
          <button className={clsx([styles.banner__btn], 'btn btn--gradient')}>Buy crypto</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;