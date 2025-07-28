import React from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, EffectCoverflow} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import styles from './PromoSlider.module.scss'

import gorillaHero from '../../assets/images/sliders/main-slider/sliderImg-1.png';
import knightHero from '../../assets/images/sliders/main-slider/sliderImg-2.png';
import slider1Bg from '../../assets/images/sliders/main-slider/sliderBg-1.jpg'
import slider2Bg from '../../assets/images/sliders/main-slider/sliderBg-2.png'
import slider3Bg from '../../assets/images/sliders/main-slider/sliderBg-3.png'
import {clsx} from "clsx";

const PromoSlider = () => {

  const slider = [
    {
      bg: slider2Bg,
      text: '<p><span>300</span>% + <span>50</span> FREE SPINS fIRST DEPOSIT</p>',
      character: knightHero,
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
        // spaceBetween={16}
        // slidesPerView={1}
        // onSlideChange={() =>   console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, EffectCoverflow]}
        slidesPerView={'auto'}
        centeredSlides={true}
        effect={'coverflow'}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        // loop={true}
        className={clsx(styles.swiper, styles.promoSwiper, 'promoSw')}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: false,
        }}
        initialSlide={1}
      >
        {slider.map((props, index) => (
          <SwiperSlide key={index} className={clsx('slider')}>
            <div className={styles.promoSlider} style={{backgroundImage: `url(${props.bg})`}}>
              {props.character && (
                <div className={styles.promoSlider__character}>
                  <img src={props.character} alt="Horilla"/>
                </div>
              )}
              <div className={styles.promoSlider__content}>
                <h5 className={styles.promoSlider__title}>{props.title}</h5>
                <div className={styles.promoSlider__text}
                     dangerouslySetInnerHTML={{__html: props.text}}></div>
                {props.subText && (
                  <div className={styles.promoSlider__SubText}>
                    <span>{props.subText}</span>
                  </div>
                )}

                <button className={clsx([styles.promoSlider__btn], 'btn btn--gradient')}>{props.btnText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default PromoSlider;