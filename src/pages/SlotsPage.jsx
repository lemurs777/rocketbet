import React, {useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from 'react-select';
import MenuCenter from "../components/MenuCenter";
import AsyncSelect from 'react-select/async';
import Search from "../components/Search";
import {SlotPageDB} from "../assets/database/SlotPageDB";
import Card from "../components/Card";
import Head from "../components/Head";
import {ReactComponent as PlayerIcon} from "../assets/images/icons/player.svg";
import Results from "../components/Results";
import FilterLine from "../components/FilterLine";
import TitleBg from "../components/TitleBg";
import styles from "../components/Card/Card.module.scss";
import {ReactComponent as FavoriteIcon} from "../assets/images/icons/favorite.svg";
const SlotsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const options = [
    {value: 'Providers (All)', label: 'Providers (All)'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ];
  return (
    <div className="slotsPage">
      <main className='main main--slots'>
        <div className="container">
          <MenuCenter/>
          <FilterLine>
            <TitleBg>Slots</TitleBg>
          </FilterLine>
          <Search placeholder={'Search slots games'}/>
          <div className="slotsPage__items">
            {SlotPageDB.map((props, index) => (
              <div className='card' key={index}>
                <Card name={props.title} image={props.image}>
                  <button className={styles.card__favorite} type="button"><FavoriteIcon/></button>
                </Card>
              </div>
            ))}
          </div>
          <div className="slotsPage__showMore">
            <button className="slotsPage__showMore-btn btn btn--gradient" type='button'>Show more</button>
          </div>
          <section className="slotsPage__table section">
            <Head title='Player results' icon={<PlayerIcon/>}/>
            <Results/>
          </section>
        </div>
      </main>
    </div>
  )
    ;
};

export default SlotsPage;