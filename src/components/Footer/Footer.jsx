import React from 'react';

import styles from './Footer.module.scss'

import bitcoin from '../../assets/images/pay/bitcoin.svg'
import litecoin from '../../assets/images/pay/litecoin.svg'
import dogecoin from '../../assets/images/pay/dogecoin.svg'
import bitcoincash from '../../assets/images/pay/bitcoin-cash.svg'
import etherium from '../../assets/images/pay/ethereum.svg'
import tether from '../../assets/images/pay/tether.svg'

import {ReactComponent as Tg} from '../../assets/images/social/tg.svg';
import {ReactComponent as Fb} from '../../assets/images/social/fb.svg';
import {ReactComponent as Instagram} from '../../assets/images/social/instagram.svg';
import {ReactComponent as Twitter} from '../../assets/images/social/twitter.svg';

import Logo from "../Logo";
import {Link} from "react-router-dom";

const Footer = () => {
  const payList = [bitcoin, litecoin, dogecoin, bitcoincash, etherium, tether]
  const menuList = [
    {
      title: 'Help',
      path: '/help'
    },
    {
      title: 'Faq',
      path: '/faq'
    },
    {
      title: 'Privacy Policy ',
      path: '/privacy'
    },
    {
      title: 'Terms of Service',
      path: '/terms'
    },
    {
      title: 'Refer a friend',
      path: '/refer'
    },
    {
      title: 'Rules',
      path: '/rules'
    },
    {
      title: 'About Us',
      path: '/about'
    },
    {
      title: 'Affiliate Program',
      path: '/affiliate'
    },
    {
      title: 'Contact Us',
      path: '/contact'
    },
    {
      title: 'Responsible Gambling',
      path: '/responsible'
    }
  ]
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>


          <div className={styles.footer__row}>
            <div className={styles.footer__logo}>
              <Logo/>
            </div>
            <div className={styles.footer__text}>
              <p><b>RocketBet:</b> Play thousands of exciting, provably fair games and get the best odds on 50+ sports.
                Deposit with Visa, Ethereum, Bitcoin, Litecoin & more.
                Featuring instant withdrawals and tons of rewards every day!</p>
            </div>

          </div>
          <div className={styles.footer__row}>
            <div className={styles.footer__pay}>
              <h5 className={styles.title}>Payment methods</h5>
              <ul className={styles.footer__payList}>
                {payList.map((item, index) => (
                  <li className={styles.payItem} key={index}>
                    <img src={item} alt=""/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footer__row}>
            <div className={styles.footerSocial}>
              <h5 className={styles.title}>Social networks</h5>
              <ul className={styles.footer__socialList}>
                <li><a className={styles.socialItem} href="#"><Tg/></a></li>
                <li><a className={styles.socialItem} href="#"><Fb/></a></li>
                <li><a className={styles.socialItem} href="#"><Instagram/></a></li>
                <li><a className={styles.socialItem} href="#"><Twitter/></a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footer__row}>
            <h5 className={styles.title}>Other</h5>
            <ul className={styles.footer__otherList}>
              {menuList.map(({title, path}) => (
                <li key={title}>
                  <Link  className={styles.footerOtherItem} to={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;