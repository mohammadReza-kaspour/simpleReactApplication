import React, { Component } from 'react';

import styles from "./styles/search.style.module.css"

export class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>Search what you want</p>
                <input placeholder='Search....'/>
            </div>
        );
    }
}