import React, {useEffect} from 'react';
import Card from "../components/Card";
import styles from "../components/Card/Card.module.scss";
import {ReactComponent as InfoIcon} from "../assets/images/icons/info.svg";
import PromoSlider from "../components/PromoSlider";
import PromoDB from "../assets/database/PromoDB";

const PromoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
      <div className="container">
    <main className='main main--promo'>


      <PromoSlider/>
      <h1 className="promo__title title">Promotions</h1>
      <div className="list">
        {PromoDB.map((props, index) => (
          <div key={index} >
            <Card classes='promoCard' image={props.image} name={props.name} icon={props.icon}>
              <button className={styles.card__favorite} type="button"><InfoIcon/></button>
            </Card>
          </div>
        ))}
      </div>

    </main>
      </div>
  );
};

export default PromoPage;