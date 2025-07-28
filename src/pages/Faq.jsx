import React, {useEffect} from 'react';
import Accordion from "../components/Accordion";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const faqList = [
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    },
    {
      question: 'How do I open an account?',
      answer: 'At RocketBet, all customer deposits are held in an insured escrow account, either in cash or cash equivalents. Your deposit is fully secured and available for withdrawal on a daily basis, with prompt payouts within 24-48 hours. All online transactions are coded and encrypted for your protection.'
    }
  ]
  return (
    <main className="main main--faq">
      <div className="container">

        <h1 className="title">FAQ</h1>
        <Accordion faqList={faqList}/>
      </div>
    </main>
  );
};

export default Faq;