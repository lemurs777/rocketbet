import React from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import styles from './MainSlider.module.scss'

import gorillaHero from '../../assets/images/sliders/main-slider/sliderImg-1.png';
import knightHero from '../../assets/images/sliders/main-slider/sliderImg-2.png';
import slider1Bg from '../../assets/images/sliders/main-slider/sliderBg-1.jpg'
import slider2Bg from '../../assets/images/sliders/main-slider/sliderBg-2.png'
import slider3Bg from '../../assets/images/sliders/main-slider/sliderBg-3.png'
import {clsx} from "clsx";

const MainSlider = () => {

  const slider = [
    {
      title: 'Your Favorite Crypto Casino',
      bg: slider1Bg,
      text: '<p><span>100</span>% Deposit Bonus up to <span>$400</span> & Get Free Spins!</p>',
      character: gorillaHero,
      btnText: 'Play Now'
    },
    {
      bg: slider3Bg,
      text: '<p><span>300</span>% + <span>50</span> FREE SPINS fIRST DEPOSIT</p>',
      btnText: 'join now',
      subText: 'In Gonzo\'s Quest from Cory casino'
    },
    {
      bg: slider2Bg,
      text: '<p><span>300</span>% + <span>50</span> FREE SPINS fIRST DEPOSIT</p>',
      character: knightHero,
      btnText: 'join now',
      subText: 'In Gonzo\'s Quest from Cory casino'
    },
  ]

  return (
    <div className="mainSlider">
      <div className="mainSlider__head">
        <div className="mainSlider__nav">
        </div>
        <h2 className="mainSlider__title">Best offers</h2>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}

        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        className={clsx(styles.swiper, styles.mainSwiper,'mainSwiper')}
      >
        {slider.map((props, index) => (
          <SwiperSlide key={index}>
            <div className={styles.mainSlider} style={{backgroundImage: `url(${props.bg})`}}>
              {props.character && (
                <div className={styles.mainSlider__character}>
                  <img src={props.character} alt="Horilla"/>
                </div>
              )}
              <div className={styles.mainSlider__content}>
                <h5 className={styles.mainSlider__title}>{props.title}</h5>
                <div className={styles.mainSlider__text}
                     dangerouslySetInnerHTML={{__html: props.text}}></div>
                {props.subText && (
                  <div className={styles.mainSlider__SubText}>
                    <span>{props.subText}</span>
                  </div>
                )}

                <button className={clsx([styles.mainSlider__btn], 'btn btn--gradient')}>{props.btnText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default MainSlider;