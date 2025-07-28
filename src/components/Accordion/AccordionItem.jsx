import React, {useRef} from 'react';
import styles from "./Accordion.module.scss";
import {clsx} from "clsx";
import {ReactComponent as ArrowIcon} from "../../assets/images/icons/arrow.svg";

const AccordionItem = ({faqItem, onCLick, openQuestion,children}) => {
  const itemRef = useRef(null)
  return (
    <li className={styles.accordionItem}>
      <button className={styles.accordionItem__title}
              onClick={() => onCLick()}>{faqItem.question}
        {<ArrowIcon className={clsx(styles.arrow, `${openQuestion ? [styles.transform] : ''}`)}/>}
      </button>
      <div className={clsx(styles.accordionItem__collapse)}
           style={openQuestion ? {height: itemRef.current.scrollHeight} : {height: '0px'}}
      >
        <div className={styles.accordionItem__body} ref={itemRef}>
          {children}
          <p>{faqItem.answer}</p>
        </div>
      </div>
    </li>
  )
    ;
};

export default AccordionItem;