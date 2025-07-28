import React, {useEffect} from 'react';
import Header from "../components/Header";
import MenuCenter from "../components/MenuCenter";
import Search from "../components/Search";
import {SlotPageDB} from "../assets/database/SlotPageDB";
import Card from "../components/Card";
import Head from "../components/Head";
import Results from "../components/Results";
import Footer from "../components/Footer";
import {ReactComponent as FavoriteIcon} from "../assets/images/icons/favorite.svg";

import {ReactComponent as PlayerIcon} from "../assets/images/icons/player.svg";
import {JackpotDB} from "../assets/database/JackpotDB";
import styles from "../components/Card/Card.module.scss";
import FilterLine from "../components/FilterLine";
import TitleBg from "../components/TitleBg";

const JackpotPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (

      <div className="jackpot">
        <main className='main main--jackpot'>
          <div className="container">
            <MenuCenter/>
            <FilterLine>
              <TitleBg>Jackpot Games</TitleBg>
            </FilterLine>
            <Search placeholder={'Jackpot Games'}/>
            <div className="jackpot__items list">
              {JackpotDB.map((props, index) => (
                <Card name={props.name} image={props.image}>
                  <button className={styles.card__favorite} type="button"><FavoriteIcon/></button>
                </Card>
              ))}
            </div>
            <section className="slotsPage__table section">
              <Head title='Player results' icon={<PlayerIcon/>}/>
              <Results/>
            </section>
          </div>
        </main>

      </div>

  );
};

export default JackpotPage;