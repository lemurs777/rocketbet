import React, {useState} from 'react';
import styles from './AccountSecurity.module.scss'
import Title from "../Title/Title";
import Input from "../Input";
import passShowImg from "../../assets/images/icons/passShow.svg";
import passHideImg from "../../assets/images/icons/passHide.svg";
import ButtonGradient from "../Buttons/ButtonGradient";

const AccountSecurity = () => {

  const [showOldPass, setShowOldPass] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [confirmPass, setConfirmPass] = useState(false)
  return (
    <div className={styles.security}>
      <Title>Change Password</Title>
      <form action="#" className={styles.form}>
        <div className={styles.input}>

          <Input icon={`${showOldPass ? passShowImg : passHideImg}`}
                 onClick={() => setShowOldPass(!showOldPass)}
                 type={`${!showOldPass ? 'password' : 'text'}`}
                 label={'Old password'}
                 placeholder={'Old password'}
          />
        </div>
        <div className={styles.input}>
          <Input icon={`${showPass ? passShowImg : passHideImg}`}
                 onClick={() => setShowPass(!showPass)}
                 type={`${!showPass ? 'password' : 'text'}`}
                 label={'New password'}
                 placeholder={'New password'}
          /></div>
        <div className={styles.input}>
          <Input icon={`${confirmPass ? passShowImg : passHideImg}`}
                 onClick={() => setConfirmPass(!confirmPass)}
                 type={`${!confirmPass ? 'password' : 'text'}`}
                 label={'Confirm password'}
                 placeholder={'Confirm password'}
          /></div>
        <ButtonGradient>Save</ButtonGradient>
      </form>
    </div>
  );
};

export default AccountSecurity;