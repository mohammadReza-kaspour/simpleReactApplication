import React, { Component } from 'react';

import styles from "./styles/footer.style.module.css";

export class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>&copy; All Rights Reserved</p>
            </div>
        );
    }
}