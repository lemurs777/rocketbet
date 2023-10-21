import React, {useState} from 'react';
import Accordion from "@mui/material/Accordion";
// import styles from "../Modals/ModalTab/ModalTab.module.scss";
import AccordionSummary from "@mui/material/AccordionSummary";
import {clsx} from "clsx";
import AccordionDetails from "@mui/material/AccordionDetails";
import Input from "../Input";
import Select from "react-select";
import {Link} from "react-router-dom";
import ButtonGradient from "../Buttons/ButtonGradient";
import {ReactComponent as ArrowIcon} from "../../assets/images/icons/arrow.svg";
import styles from './AccountVerification.module.scss'
import passShowImg from "../../assets/images/icons/passShow.svg";
import passHideImg from "../../assets/images/icons/passHide.svg";
import uploadImg from '../../assets/images/icons/upload.svg'
import bsCustomFileInput from 'bs-custom-file-input'

const AccountVerification = () => {
  const [fileBack, setFileBack] = useState('Upload file')
  const [fileFront, setFileFront] = useState('Upload file')
  const [fileAddress, setFileAddress] = useState('Upload file')
  const [fileSource, setFileSource] = useState('Upload file')
  const [showPass, setShowPass] = useState(true)
  const countries = [
    {
      value: 'Ukraine',
      label: 'Ukraine'
    },
    {
      value: 'USA',
      label: 'USA'
    },
    {
      value: 'Poland',
      label: 'Poland'
    },
    {
      value: 'GreatBritain',
      label: 'Great Britain'
    }
  ]
  bsCustomFileInput.init()
  const handleOnChange = (e) => {
    e.preventDefault()
    setFileBack(e.target.files[0].name)
  }
  const handleOnChangeSource = (e) => {
    e.preventDefault()
    setFileSource(e.target.files[0].name)
  }
  const handleOnChangeAddress = (e) => {
    e.preventDefault()
    setFileAddress(e.target.files[0].name)
  }
  const handleOnChangeFront = (e) => {
    e.preventDefault()
    setFileFront(e.target.files[0].name)
  }
  return (
    <div className={styles.accountVerify}>
      <Accordion className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ArrowIcon/>}
          aria-controls="panel-content"
          id='1'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionBtn}>
            <h6
              className={styles.accordionBtn__title}>Level 1 <span
              className={clsx(styles.accordionBtn__label, 'confirm')}>(Completed)</span>
            </h6>

          </div>
        </AccordionSummary>

        <AccordionDetails className={styles.accordionDetails}>
          <div className={styles.accordionBtn__text}>
            <p>Please fill out all fields below to qualify for level 1 verification.</p>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <Input label={'First name'} placeholder={'Your name'}/>
            </div>
            <div className={styles.input}>
              <Input label={'Last name'} placeholder={'Your last name'}
                     icon={`${showPass ? passShowImg : passHideImg}`}
                     onClick={() => setShowPass(!showPass)}
                     type={`${!showPass ? 'password' : 'text'}`}
              />
            </div>
          </div>
          <div className={styles.date}>
            <div className={styles.input}>
              <Input label={'Date of Birth'} placeholder={'Day'}/>
            </div>
            <div className={styles.input}>
              <Input placeholder={'Month'}/>
            </div>
            <div className={styles.input}>
              <Input placeholder={'Year'}/>
            </div>
          </div>
          <div className={styles.withdrawSelect}>
            <label className={styles.withdrawSelect__label}>Priority</label>
            <Select
              defaultValue={countries[0]}
              options={countries}
              classNamePrefix='withdrawSelect'
            />
          </div>
          <div className={styles.input}>
            <Input label={'Residentaio Address'} placeholder={'Your address'}/>
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <Input label={'City'} placeholder={'Your city'}/>
            </div>
            <div className={styles.input}>
              <Input label={'State/Province'} placeholder={'Your state or province'}
              />
            </div>
          </div>

          <ButtonGradient>Save</ButtonGradient>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ArrowIcon/>}
          aria-controls="panel-content"
          id='2'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionBtn}>
            <h6
              className={styles.accordionBtn__title}>Level 2 <span
              className={clsx(styles.accordionBtn__label, 'anticipation')}>(In anticipation)</span>
            </h6>

          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <div className={styles.accordionBtn__text}>
            <p>Please upload your proof of identity. All documents must be laying on a flat surface with all 4 corners
              inside the frame. All information should be clear and identifiable.</p>
          </div>
          <div className={styles.input}>
            <div className={styles.customFileName}>{fileFront}</div>
            <Input label={'Proof of Identity (Front)'} placeholder={'Upload file'} icon={uploadImg}
                   type={'file'}
                   onChange={handleOnChangeFront}
            />
          </div>
          <div className={styles.input}>
            <div className={styles.customFileName}>{fileBack}</div>
            <Input label={'Proof of Identity (Back)'} placeholder={'Upload file'} icon={uploadImg}
                   type={'file'}
                   onChange={handleOnChange}
            />
          </div>
          <div className={styles.input__extension}>
            <p>Following file types are accepted: .png, .jpg, .pdf</p>
          </div>
          <div className={styles.text}>
            <p>All data is safely stored and encrypted.</p>
          </div>
          <ButtonGradient>Save</ButtonGradient>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ArrowIcon/>}
          aria-controls="panel-content"
          id='3'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionBtn}>
            <h6
              className={styles.accordionBtn__title}>Level 3 <span
              className={clsx(styles.accordionBtn__label, 'anticipation')}>(In anticipation)</span>
            </h6>

          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <div className={styles.accordionBtn__text}>
            <p>Please upload supporting documentation for your Proof of Address.</p>
          </div>
          <div className={styles.input}>
            <div className={styles.customFileName}>{fileAddress}</div>
            <Input label={'Proof of Address'} placeholder={'Upload file'} icon={uploadImg}
                   type={'file'}
                   onChange={handleOnChangeAddress}
            />
          </div>
          <div className={styles.input__extension}>
            <p>Following file types are accepted: .png, .jpg, .pdf</p>
          </div>
          <div className={styles.text}>
            <p>All data is safely stored and encrypted.</p>
          </div>
          <ButtonGradient>Save</ButtonGradient>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ArrowIcon/>}
          aria-controls="panel-content"
          id='4'
          className={styles.accordionSummary}
        >
          <div className={styles.accordionBtn}>
            <h6
              className={styles.accordionBtn__title}>Level 4 <span
              className={clsx(styles.accordionBtn__label, 'rejected')}>(In anticipation)</span>
            </h6>

          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <div className={styles.accordionBtn__text}>
            <p>Please upload supporting documentation for your Proof of Address.</p>
          </div>
          <div className={styles.input}>
            <div className={styles.customFileName}>{fileSource}</div>
            <Input label={'Proof of Address'} placeholder={'Upload file'} icon={uploadImg}
                   type={'file'}
                   onChange={handleOnChangeSource}
            />
          </div>
          <div className={styles.input__extension}>
            <p>Following file types are accepted: .png, .jpg, .pdf</p>
          </div>
          <div className={styles.text}>
            <p>All data is safely stored and encrypted.</p>
          </div>
          <ButtonGradient>Save</ButtonGradient>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccountVerification;