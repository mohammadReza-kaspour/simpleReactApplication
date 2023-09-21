import React from 'react';

import styles from "./styles/banner.style.module.css"

import banner from "../assets/images/banner1.png";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" className={styles.banner} />
            <div className={styles.textContainer}>
                <h1>Sky Store</h1>
                <p>you have <span>Sky Store</span> let's camp...</p>
            </div>
        </div>
    );
};

export default Banner;