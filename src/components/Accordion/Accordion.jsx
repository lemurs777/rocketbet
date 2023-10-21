import React, {useRef, useState} from 'react';
import {ReactComponent as ArrowIcon} from "../../assets/images/icons/arrow.svg";
import styles from './Accordion.module.scss'
import {clsx} from "clsx";
import AccordionItem from "./AccordionItem";

const Accordion = ({faqList}) => {
  const [openQuestion, setOpenQuestion] = useState(null)
  const itemRef = useRef(null)
  const openHandler = (id) => {
    if (id === openQuestion) setOpenQuestion(null)
    else setOpenQuestion(id)
  }
  return (
    <ul className={styles.accordion}>
      {faqList.map((item, id) => {
        return <AccordionItem
          onCLick={() => {
            id === openQuestion ? setOpenQuestion(null) : setOpenQuestion(id)
          }}
          faqItem={item} openQuestion={id === openQuestion} key={id}/>
      })}
    </ul>
  );
};

export default Accordion;