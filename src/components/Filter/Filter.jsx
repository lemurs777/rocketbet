import React, {useState} from 'react';
import styles from './Filter.module.scss'
import {ReactComponent as ArrowIcon} from "../../assets/images/icons/arrow.svg";

const Filter = () => {
  const filter = ['popular', 'hot', 'promotions']
  const [isFilter, setIsFilter] = useState(filter[0])
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className={styles.filter}>
      <button className={styles.btn} onClick={() => setShowMenu(!showMenu)}>
        {isFilter}
        <ArrowIcon/>
      </button>
      {showMenu && (
        <ul className={styles.filter__list}>
          {filter.map(filter => {
            return <li key={filter} onClick={() => {
              setShowMenu(false)
              setIsFilter(filter)
            }}>{filter}
            </li>
          })}
        </ul>
      )}
    </div>
  );
};

export default Filter;