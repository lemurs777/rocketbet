import React, {useEffect} from 'react';
import Search from "../components/Search";
import {BlackJackDB} from "../assets/database/BlackJackDB";
import Card from "../components/Card";
import styles from "../components/Card/Card.module.scss";

import {ReactComponent as FavoriteIcon} from "../assets/images/icons/favorite.svg";
import Head from "../components/Head";
import {ReactComponent as PlayerIcon} from "../assets/images/icons/player.svg";
import Results from "../components/Results";
import FilterLine from "../components/FilterLine";
import TitleBg from "../components/TitleBg";
import MenuCenter from "../components/MenuCenter";

const BlackJackPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (

    <div className="blackJackPage">
      <main className="main main--blackJack section">
        <div className="container">
          <MenuCenter/>
          <FilterLine>
            <TitleBg>Black jack</TitleBg>
          </FilterLine>
          <Search placeholder={'Search Black Jack'}/>
          <div className="blackJackPage__items list">
            {BlackJackDB.map((props, index) => (
              <div key={index}>
                <Card image={props.image} name={props.title}>
                  <button className={styles.card__favorite} type="button"><FavoriteIcon/></button>
                </Card>
              </div>
            ))}
          </div>
          <Head icon={<PlayerIcon/>} title={'Player results'}></Head>
          <Results/>
        </div>
      </main>

    </div>

  )
    ;
};

export default BlackJackPage;