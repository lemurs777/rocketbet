import React from 'react';

import styles from './FeedbackForm.module.scss'
import ButtonGradient from "../Buttons/ButtonGradient";
import {clsx} from "clsx";

const FeedbackForm = ({name, children, action, className}) => {
  return (
    <div className={clsx(styles.feedbackForm, className)}>
      <div className={styles.feedbackForm__name}>
        {name}
      </div>
      <form action={action} className={styles.feedbackForm__item}>
        {children}
        <ButtonGradient type='submit'>Send</ButtonGradient>
      </form>
    </div>
  );
};

export default FeedbackForm;