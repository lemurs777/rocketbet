import React from 'react';
import {Link} from "react-router-dom";

import styles from './Logo.module.scss'

import logo from '../../assets/images/logo.svg'

const Logo = () => {
    return (
        <Link className={styles.logo} to="/">
            <img src={logo} alt="logo"/>
        </Link>
    );
};

export default Logo;