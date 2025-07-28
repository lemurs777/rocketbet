import React from 'react';
import Title from "../components/Title/Title";
import AccountVerification from "../components/AccountVerification";

const AccountVerificationPage = () => {
  return (
    <div className='verificationPage'>
      <Title>Verification your account</Title>
      <AccountVerification/>
    </div>
  );
};

export default AccountVerificationPage;