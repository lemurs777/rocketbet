import React, {useState} from 'react';
import styles from './FilterLine.module.scss'
import Filter from "../Filter";
import Select from "react-select";
import {FormControlLabel, Checkbox} from "@mui/material";
import MultipleSelect from "../MultipleSelect/MultipleSelect";

const FilterLine = ({children, filter}) => {
  const options = [
    {
      label: 'Providers(all)',
      value: 'Providers'
    },
    {
      label: 'Provider1',
      value: 'Provider1'
    },
    {
      label: 'Provider2',
      value: 'Provider2'
    },
    {
      label: 'Provider3',
      value: 'Provider3'
    }

  ]


  function handleValue() {

  }

  return (
    <div className={styles.filters}>
      <div className={styles.filters__col}>
        {children}
        <MultipleSelect/>
      </div>
      <div className={styles.filters__col}>

        <Filter/>

      </div>
    </div>
  );
};

export default FilterLine;