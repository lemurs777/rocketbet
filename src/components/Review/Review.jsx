import React from 'react';

import styles from './Review.module.scss'

import star from '../../assets/images/icons/star.svg'
import starEmpty from '../../assets/images/icons/star-empty.svg'

const Review = ({description, image, name}) => {
  return (


        <div className={styles.reviewItem}>
          <div className={styles.reviewItem__content}>
            <p>
              {description}
            </p>
          </div>
          <div className={styles.reviewItem__bottom}>
            <div className={styles.reviewItem__avatar}>
              <img src={image} alt={name}/>
            </div>
            <h6 className={styles.reviewItem__name}>{name}</h6>
            <div className={styles.reviewItem__rating}>
              <div className={styles.reviewItem__star}>
                <img src={star} alt=""/>
              </div>
              <div className={styles.reviewItem__star}>
                <img src={star} alt=""/>

              </div>
              <div className={styles.reviewItem__star}>
                <img src={star} alt=""/>

              </div>
              <div className={styles.reviewItem__star}>
                <img src={star} alt=""/>

              </div>
              <div className={styles.reviewItem__star}>
                <img src={starEmpty} alt=""/>

              </div>
            </div>
          </div>
        </div>


  );
};

export default Review;