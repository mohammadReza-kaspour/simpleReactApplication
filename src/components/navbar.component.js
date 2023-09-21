//libs
import React from "react";

//styles
import styles from "./styles/navbar.style.module.css"

//assets
import logo from "../assets/images/github.jpg"

const Navbar = () => {
    return(
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <img src={logo} alt="logo" className={styles.logo}/>
        </header>
    );
};

export default Navbar;