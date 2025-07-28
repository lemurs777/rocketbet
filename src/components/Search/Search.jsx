import React, {useState} from 'react';

import {ReactComponent as SearchIcon} from "../../assets/images/icons/search.svg";

import styles from './Search.module.scss'
import {clsx} from "clsx";

const Search = ({placeholder}) => {
  const [searchFocus, setSearchFocus] = useState(false)
  return (
    <div className={styles.search}>
      <div className={clsx([styles.search__item], `${!searchFocus ? '' : styles.search__itemActive}`)}>
        <input
          type="text"
          className={styles.search__input}
          placeholder={placeholder}
          onFocus={() => {
            setSearchFocus(!searchFocus)
          }}
          onBlur={() => {
            setSearchFocus(!searchFocus)
          }}

        />
        <div className={styles.search__icon}>
          <SearchIcon/>
        </div>
      </div>
    </div>
  );
};

export default Search;