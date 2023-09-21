import React, { Component } from 'react';
import { Card } from './card.component';

import styles from "./styles/cards.style.module.css"

import image1 from "../assets/images/pot.png"
import image2 from "../assets/images/light.jpg"
import image3 from "../assets/images/tent.jpg"
import image4 from "../assets/images/midTent.jpg"


export class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card Image={image1} name={"pot for camp"} cost={"20$"} />
                <Card Image={image2} name={"night light"} cost={"5$"} />
                <Card Image={image3} name={"small tent"} cost={"50$"} />
                <Card Image={image4} name={"mid size tent"} cost={"75$"} />
            </div>
        );
    }
}