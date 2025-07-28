import React, {useEffect, useRef, useState} from 'react';
import styles from './UserDropDown.module.scss'
import userImg from '../../assets/images/user/user.svg'
import {ReactComponent as SupportIcon} from "../../assets/images/user/support.svg";
import {ReactComponent as WalletIcon} from "../../assets/images/user/wallet.svg";
import {ReactComponent as AccountIcon} from "../../assets/images/user/account.svg";
import {ReactComponent as AffiliatetIcon} from "../../assets/images/user/affiliate.svg";
import {ReactComponent as HistorytIcon} from "../../assets/images/user/history.svg";
import {ReactComponent as HelpIcon} from "../../assets/images/user/help.svg";
import {ReactComponent as LogOutIcon} from "../../assets/images/user/logout.svg";
import {clsx} from "clsx";
import {Link} from "react-router-dom";

const UserDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapRef = useRef(null)

  function handleClick(e) {
    if (wrapRef.current && !wrapRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, []);
  const userList = [
    {
      name: 'Wallet',
      icon: <WalletIcon/>
    },
    {
      name: 'Account',
      icon: <AccountIcon/>
    },
    {
      name: 'Affiliate',
      icon: <AffiliatetIcon/>
    },
    {
      name: 'History',
      icon: <HistorytIcon/>
    },
    {
      name: 'Help Center',
      icon: <HelpIcon/>
    },
    {
      name: 'Live Support',
      icon: <SupportIcon/>
    },
    {
      name: 'Log out',
      icon: <LogOutIcon/>
    },
  ]
  return (
    <div className={styles.user} ref={wrapRef}>
      <button className={clsx(styles.userLabel, `${!isOpen ? '' : styles.active} desktop`)}
              onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.userLabel__avatar}><img src={userImg} alt="user"/></div>
        <div className={styles.userLabel__name}>UserName</div>
      </button>
      <Link className={clsx(styles.mobileUser, 'mobile')} to='./general'>
        <div className={styles.userLabel__avatar}><img src={userImg} alt="user"/></div>

      </Link>
      <ul className={clsx(styles.user__list, `${!isOpen ? '' : styles.show}`)}>
        {userList.map(item => {
          return <li key={item.name}>
            <Link to={item.path} className={styles.userItem}>
              <div className={styles.userItem__icon}>{item.icon}</div>
              <p>{item.name}</p>
            </Link>
          </li>
        })}
      </ul>
    </div>
  );
};

export default UserDropDown;