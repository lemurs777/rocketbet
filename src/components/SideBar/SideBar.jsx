import React, {useEffect, useState} from 'react';
import styles from './SideBar.module.scss'
import {ReactComponent as MenuOpenIcon} from "../../assets/images/icons/menu-open.svg";
import {ReactComponent as MenuOpenClose} from "../../assets/images/icons/menu-close.svg";
import {ReactComponent as SearchIcon} from "../../assets/images/icons/search.svg";
import {ReactComponent as SupportIcon} from "../../assets/images/icons/support.svg";
import {ReactComponent as CryptoIcon} from "../../assets/images/icons/crypto.svg";
import {ReactComponent as PromoIcon} from "../../assets/images/icons/promotions.svg";
import {ReactComponent as StarIcon} from "../../assets/images/icons/rating.svg";
import {ReactComponent as InfoIcon} from "../../assets/images/icons/info.svg";
import {ReactComponent as ArrowIcon} from "../../assets/images/icons/arrow.svg";
import enImg from "../../assets/images/language/en.svg";
import plImg from "../../assets/images/language/pl.svg";
import geImg from "../../assets/images/language/ge.svg";
import db from '../../assets/database/SideBarDB'
import {Link, NavLink} from "react-router-dom";
import Logo from "../Logo";
import {clsx} from "clsx";
import SideBarSubMenu from "./SideBarSubMenu";
import Search from "../Search";
import Select from "react-select";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [subNav, setSubNav] = useState(true)
  useEffect(() => {
    setIsOpen(false)
  }, []);
  const list = [
    {
      icon: <PromoIcon/>,
      title: 'Promotions',
      link: '/promo'
    },
    {
      icon: <InfoIcon/>,
      title: 'Help',
      link: '/help'
    },
    {
      icon: <StarIcon/>,
      title: 'VIP',
      link: '/vip'
    },
    {
      icon: <CryptoIcon/>,
      title: 'Buy crypto',
      link: '/buy'
    },
  ]
  const [sidebar, setSidebar] = useState(false);
  const lang = [
    {
      value: 'en',
      label: <div className={clsx(styles.innerSelect, 'innerSelect')}><img src={enImg} alt=""/><span>English</span>
      </div>,
    },
    {
      value: 'pl',
      label: <div className={clsx(styles.innerSelect, 'innerSelect')}><img src={plImg} alt=""/><span>Poland</span>
      </div>,

    },
    {

      value: 'ge',
      label: <div className={clsx(styles.innerSelect, 'innerSelect')}><img src={geImg} alt=""/><span>Germany</span>
      </div>,

    },
  ]
  const showSidebar = () => setSidebar(!sidebar);

  function showMenu(e) {
// if(e.currentTarget.tagName.contains('UL')){
//   console.log('ul')
// }

    // if(e.currentTarget.parentElement.lastElementChild.tagName === 'ul'){
    //   console.log(e.currentTarget)
    // }
    // console.log(e.currentTarget.lastElementChild)
  }

  return (
    <div className={clsx(styles.sidebar, ` sidebar ${isOpen ? styles.active : ''}`)}>
      <button className={styles.menuBtn}
              onClick={() => {

                setIsOpen(!isOpen)
              }}
      >
        {!isOpen ? <MenuOpenIcon/> :
          <MenuOpenClose/>}
      </button>
      <div className={styles.sidebar__content}>
        <div className={styles.search} onClick={() => setIsOpen(true)}>
          <Search placeholder={'Search...'}/>
        </div>
        <ul className={styles.sidebar__list}>
          {db.map((item, index) => (
            <SideBarSubMenu item={item} key={index} index={index} subMenu={isOpen} onClick={() => {
              if (item.submenu) {
                setIsOpen(true)
              }
            }}/>
          ))}
        </ul>
        <ul className={styles.sidebar__listBottom}>
          {list.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} className={styles.sidebarItemBottom}>
                <div className={styles.sidebarItem__icon}>{item.icon}</div>
                <span className={styles.sidebarItem__text}>{item.title}</span>
              </NavLink>

            </li>
          ))}
        </ul>
        <div className={styles.sidebar__footer}>
          <div className={styles.select} onClick={() => {
            setIsOpen(true)

          }}>
            <Select
              defaultValue={lang[0]}
              options={lang}
              classNamePrefix={clsx(styles.selectLang, 'withdrawSelect--sm')}
            />
          </div>
          <button className={styles.sidebar__support}>
            <div className={styles.sidebar__supportIcon}>
              <SupportIcon/>
            </div>
            <div className={styles.sidebar__supportText}>
              Support
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;