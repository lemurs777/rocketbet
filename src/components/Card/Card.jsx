import React from 'react';

import {ReactComponent as FullScreen} from "../../assets/images/icons/fullscreen.svg";

import styles from './Card.module.scss'
import {Link} from "react-router-dom";
import {clsx} from "clsx";

const Card = ({name, image, icon, children, key, link, classes}) => {
  return (
    <Link to={link} className={clsx(styles.card, classes)}>
      <div className={styles.card__img}>
        <img src={image} alt={name}/>
        <div className={styles.card__btns}>
          <Link className={clsx(styles.play, "btn btn--gradient")} to='/slot'>Играть</Link>
          <button className={clsx(styles.demo, "btn")}>Демо</button>
        </div>
      </div>
      <div className={styles.card__body}>
        <h5 className={styles.card__title}>{name}</h5>
        {children}
        {/*<button className={styles.card__favorite} type="button">{icon}</button>*/}
      </div>
    </Link>
  );
};

export default Card;