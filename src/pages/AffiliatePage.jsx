import React, {useEffect} from 'react';
import Title from "../components/Title/Title";
import AffiliateBg from "../components/AffiliateBg";

import affiliateBg from '../assets/images/affiliate-bg.jpg'
import whyImg from '../assets/images/affiliate/why-bg.png'
import {ReactComponent as Icon1} from "../assets/images/affiliate/card-1.svg";
import {ReactComponent as Icon2} from "../assets/images/affiliate/card-2.svg";
import {ReactComponent as Icon3} from "../assets/images/affiliate/card-3.svg";
import {ReactComponent as Icon4} from "../assets/images/affiliate/card-4.svg";
import {ReactComponent as Icon5} from "../assets/images/affiliate/card-5.svg";
import {ReactComponent as Icon6} from "../assets/images/affiliate/card-6.svg";
import Accordion from "../components/Accordion";

const AffiliatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const benefitsList = [
    {
      icon: <Icon1/>,
      text: 'Approved by Popular Casino Affiliates\n'
    },
    {
      icon: <Icon2/>,
      text: 'Professional Player Retention\n'
    },
    {
      icon: <Icon3/>,
      text: 'Lightning Payments "Get paid by the 1st"\n'
    },
    {
      icon: <Icon4/>,
      text: 'No Limits on Earnings!'
    },
    {
      icon: <Icon5/>,
      text: 'In-depth analysis & reports\n'
    },
    {
      icon: <Icon6/>,
      text: 'Over 3,000+ games available'
    },
  ]
  const affiliateWhyList = [
    'Top-of-the-range casino brands',
    'Top-tier commission payouts and revenue offers',
    'Rapid payouts',
    'We go the extra mile',
    'Lifetime commissions',
    'We make it all about YOU',
    'Driving revenues is what matters'
  ]
  const frequentlyList = [
    {
      question: 'What are RocketBet Partners?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'What are RocketBet Partners?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'What are RocketBet Partners?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'What are RocketBet Partners?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'What are RocketBet Partners?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'What are RocketBet Partners?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    }
  ]
  return (
    <div className='affiliate'>
      <main className="main main--affiliate">
        <div className="container">


          <Title>Affiliate program</Title>
          <AffiliateBg image={affiliateBg} text={'Work with the best and earn more!'}
                       title={'IT’S YOUR TIME TO SHINE\n' +
                         'EARN UP TO 50% RS'}>
            <button className="btn btn--gradient affiliate__btn">Become an affiliate</button>
          </AffiliateBg>
          <Title>Our benefits</Title>
          <ul className="affiliate__list">
            {benefitsList.map((item, index) => {
              return <li className='affiliateItem' key={index}>
                <div className="affiliateItem__content">
                  <div className="affiliateItem__icon">
                    {item.icon}
                  </div>
                  <div className="affiliateItem__text">
                    <p>
                      {item.text}
                    </p>
                  </div>
                </div>
              </li>
            })}
          </ul>
          <div className="affiliate__why affiliate-why">
            <div className="affiliate-why__inner">
              <div className="affiliate-why__content">
                <Title>Why Choose rocketBet Affiliates? </Title>
                <div className="affiliate-why__text">
                  <p>
                    <b>RocketBet</b> is a team of creative, authors, computer scientists, analysts and designers with
                    many
                    years of experience in the gambling and gaming industry. We live all the latest casino developments,
                    are in permanent dialogue and understand the casino world in its complexity and its claims to the
                    highest and most exciting entertainment. Our main goal is to satisfy our casino players and
                    partners,
                    to combine our vision with the best solution and to touch the casino universe in the heart.
                  </p>
                </div>
                <ul className="affiliate-why__list">
                  {affiliateWhyList.map(item => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="affiliate-why__btn">
                  <button className="btn btn--gradient ">Become an affiliate</button>
                </div>

              </div>
              <div className="affiliate-why__img">
                <img src={whyImg} alt="Why Choose"/>
              </div>
            </div>
          </div>
          <div className="affiliateFaq">
            <Title>Answers to frequently asked questions</Title>
            <Accordion faqList={frequentlyList}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AffiliatePage;