import React, {useEffect} from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import styles from "../components/Card/Card.module.scss";
import Head from "../components/Head";
import Results from "../components/Results";
import Footer from "../components/Footer";
import {TableGameDB} from "../assets/database/TableGameDB";
import {ReactComponent as FavoriteIcon} from "../assets/images/icons/favorite.svg";
import {ReactComponent as PlayerIcon} from "../assets/images/icons/player.svg";
import MenuCenter from "../components/MenuCenter";
import FilterLine from "../components/FilterLine";
import TitleBg from "../components/TitleBg";

const TablePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (

      <div className="tableGamePage">
        <main className="main main--table section">
          <div className="container">
            <MenuCenter/>
            <FilterLine>
              <TitleBg>Table games</TitleBg>
            </FilterLine>
            <Search placeholder={'Search Table Games'}/>
            <div className="blackJackPage__items list">
              {TableGameDB.map((props, index) => (
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

  );
};

export default TablePage;