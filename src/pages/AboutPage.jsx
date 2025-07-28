import React, {useEffect} from 'react';
import BgBanner from "../components/BgBanner";

// dangerouslySetInnerHTML={{__html: props.text}}
import aboutBgImg from '../assets/images/about-bg.jpg'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='about'>
      <main className='main main--about'>
        <div className="container">


          <h1 className="about__title title">About us</h1>
          <div className="about__banner">
            <BgBanner text={'About RocketBet'} image={aboutBgImg}/>
          </div>
          <div className="about">
            <div className="aboutBlock">
              <h2 className="aboutBlock__title">RocketBet</h2>
              <div className="aboutBlock__text">
                <p>
                  RocketBet is one of the pioneers in the legal online sports betting industry and is licensed in
                  Curacao.
                  We provide a safe and secure place for sports wagering to more than 1 Million Clients. BetUS started
                  in
                  1994 and has been in operation for more than 25 years. Our Mission is to provide recreational sports
                  bettors with an unparalleled experience in which to indulge their passion for sports and sports
                  wagering.
                </p>
                <p>We have successfully elevated ourselves above the competition by maintaining the following original
                  principles of our brand since 1994:
                </p>
                <span>Deliver the most up to date odds and analysis</span>
                <span>Deliver the most up to the minute wagering opportunities for our clients</span>
                <span>Provide the most complete, rapid response customer service for our clients</span>
                <span>Provide fast, accurate, and complete content to our clients on issues and angles that matter to them</span>
                <span>Whether it is current events, breaking news, politics, Hollywood gossip, sports, stock predictions,
              weather, you name it – BetUS will have the analysis, the odds, and opportunity to wager more accurately,
              faster, and more complete than anyone else
            </span>
                <span>Operated in fully licensed areas, BetUS is proud to boast customers from all over the world.
              Whether it’s sports, casino gaming or headline news props, betting enthusiasts choose BetUS.com.pa first.
            </span>
              </div>
            </div>
            <div className="aboutBlock">
              <h2 className="aboutBlock__title">
                Where
              </h2>
              <div className="aboutBlock__text">
                <p>
                  RocketBet is licensed and regulated by the government of Curacao.
                </p>
              </div>
            </div>
            <div className="aboutBlock">
              <h2 className="aboutBlock__title">
                Human Resources
              </h2>
              <div className="aboutBlock__text">
                <p>
                  BetUS has an extensive team with a customer service department that offers clients support and
                  operates
                  24
                  hours a day, seven days a week. BetUS employs a total staff of 1000+ people.
                </p>
              </div>
            </div>
            <div className="aboutBlock">
              <h2 className="aboutBlock__title">Place Your Bets</h2>
              <div className="aboutBlock__text">
                <p>
                  BetUS offers a wide range of betting activities; from Pro Football and College football to NASCAR and
                  horse racing. BetUS offers wagers on the following:
                </p>
                <span>Pro Football, College Football, Canadian and Arena Football Leagues</span>
                <span>Men’s Professional and College Basketball</span>
                <span>Women’s College Basketball</span>
                <span>Baseball, Hockey, Golf, Soccer, Tennis, Boxing, Mixed Martial Arts, Horse Racing and NASCAR</span>
                <span>Wagers are also offered on hot topics such as headline news, pop culture, and political events.
              Some past proposition bets in BetUS have included the Oscars, the Grammys, trial verdicts, and sports
              controversies.
            </span>
                <p>
                  BetUS also offers a full suite of Vegas-style casino games.
                </p>
              </div>
            </div>
            <div className="aboutBlock">
              <h2 className="aboutBlock__title">Other Information</h2>
              <div className="aboutBlock__text">
                <span>No membership fees.</span>
                <span>Value-added service: free predictions and picks, quick and easy account set-up, and contests.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;