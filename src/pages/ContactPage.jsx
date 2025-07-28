import React, {useEffect} from 'react';
import Title from "../components/Title/Title";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm";
import Input from "../components/Input";
import messsegaIcon from "../assets/images/icons/message.svg";
import Teaxtarea from "../components/Teaxtarea";

import emailImg from '../assets/images/icons/email.svg'
import supportlImg from '../assets/images/icons/support2.svg'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const infoItem = [
    {
      title: 'Email address',
      text: 'We keep an eye on our mailboxes and try to respond as quickly as possible. support@rocketbet.com',
      icon: emailImg,
      info: 'support@rocketbet.com'
    },
    {
      title: '24/7 support',
      text: 'Get an answer before from our online support',
      icon: supportlImg,
      info: 'Open from the side menu or bottom right'
    },
  ]
  return (
    <div className='contactPage'>
      <main className="main main--contact">
        <div className="container">


        <Title>Contact us</Title>
        <div className="contactPage__inner">
          <FeedbackForm name={'Feedback form'} className='contactPage__form'>
            <Input icon={messsegaIcon} label={'Email'} placeholder={'support@rocketbet.com'} type={'mailto:'}/>
            <Teaxtarea placeholder={'Enter the text of your appeal...'} label={'Message'}/>
          </FeedbackForm>
          <ul className="contactPage__info">
            {infoItem.map(item => {
              return <li key={item.title} className="contactInfo">
                <h5 className="contactInfo__title">{item.title}</h5>
                <div className="contactInfo__text"><p>
                  {item.text}
                </p></div>
                <div className="contactInfo__item">
                  <div className="contactInfo__icon"><img src={item.icon} alt={item.title}/></div>
                  <div className="contactInfo__label">{item.info}</div>
                </div>
              </li>
            })}
          </ul>
        </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;