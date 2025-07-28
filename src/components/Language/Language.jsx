import React, {useState} from 'react';

import styles from './Language.module.scss'
import enImg from "../../assets/images/language/en.svg";
import plImg from "../../assets/images/language/pl.svg";
import geImg from "../../assets/images/language/ge.svg";

const Language = () => {
  const languageList = [
    {
      icon: enImg
    },
    {
      icon: geImg
    },
    {
      icon: plImg
    },

  ]
  const [iconLang, setIconLang] = useState(languageList[0].icon)
  const [showLanguage, setShowLanguage] = useState(false)
  return (
    <div className={styles.language}  onClick={() => setShowLanguage(!showLanguage)}>
      <button className={styles.language__icon}><img src={iconLang} alt="language"/>
      </button>
      {showLanguage && (
        <ul>
          {languageList.map((lang, index) => {
            return <li key={index} onClick={() => {
              setIconLang(lang.icon)
              setShowLanguage(false)
            }}><img src={lang.icon} alt="language"/></li>
          })}
        </ul>
      )}
    </div>
  );
};

export default Language;