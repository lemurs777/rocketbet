import React from 'react';
import {ReactComponent as FullIcon} from "../../assets/images/icons/fs.svg";
import {ReactComponent as FsIcon} from "../../assets/images/icons/fullscreen.svg";
import {ReactComponent as FavoriteIcon} from "../../assets/images/icons/starR.svg";
// import {ReactComponent as AffiliateIcon} from "../../assets/images/icons/ratingTwo.svg";
import {ReactComponent as LeadrBoardIcon} from "../../assets/images/icons/leaderboard.svg";

import styles from './Slot.module.scss'
import img from '../../assets/images/cards/slotPage/card-2.jpg'
import {clsx} from "clsx";
import Logo from "../Logo";

const Slot = () => {
  const icons = [
    <FullIcon/>,
    <FsIcon/>,
    <FavoriteIcon/>,
    <LeadrBoardIcon/>
  ]
  return (
    <div className={styles.slot}>
      <div className={styles.slot__inner}>
        <div className={styles.slot__head}>
          <img src={img} alt=""/>
        </div>
        <div className={styles.slot__bottom}>
          <ul className={styles.slot__listIcon}>
            {icons.map((item, index) => {
              return <li key={index} className={styles.slotItem}>

                  {item}

              </li>
            })}
          </ul>
          <div className={styles.slot__logo}>
            <Logo/>
          </div>
          <div className={styles.slot__btns}>
            <button className="btn">Демо</button>
            <button className={clsx(styles.btnPlay, "btn btn--gradient")}>Играть</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slot;