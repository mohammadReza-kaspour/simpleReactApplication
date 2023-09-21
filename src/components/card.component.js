import React, { Component } from 'react';

import styles from "./styles/card.style.module.css"

export class Card extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img alt="cardImage" src={this.props.Image} className={styles.image} />
                <div className={styles.informarionBox}>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.cost}</p>
                </div>
            </div>
        );
    }
}