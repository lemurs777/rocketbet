import React from 'react';
import styles from './MobileWidget.module.scss'
import {ReactComponent as BurgerIcon} from "../../assets/images/user/burger.svg";
import {ReactComponent as SearchIcon} from "../../assets/images/icons/search.svg";
import {ReactComponent as WalletIcon} from "../../assets/images/user/wallet.svg";
import {ReactComponent as CasinoIcon} from "../../assets/images/user/casino.svg";
import {ReactComponent as ChatIcon} from "../../assets/images/user/chat.svg";
import {clsx} from "clsx";

const MobileWidget = (setIsOpen) => {
  const widgetList = [
    {
      name: 'Menu',
      icon: <BurgerIcon/>,
      class:'mobileBurger'
    },
    {
      name: 'Search',
      icon: <SearchIcon/>
    }, {
      name: 'Wallet',
      icon: <WalletIcon/>
    },
    {
      name: 'Casino',
      icon: <CasinoIcon/>
    },
    {
      name: 'Chat',
      icon: <ChatIcon/>
    }
  ]


function clicker(e){
    if(e.currentTarget.classList.contains('mobileBurger')){
      document.body.classList.toggle('open')
    }
}
  return (
    <div className={styles.widget}>
      <ul className={styles.widget__list}>
        {widgetList.map(item => {
          return <li key={item.name} className={clsx(styles.item,[item.class])} onClick={clicker}>
            <div className={styles.item__icon}>{item.icon}</div>
            <div className={styles.item__name}>{item.name}</div>
          </li>
        })}
      </ul>
    </div>
  );
};

export default MobileWidget;