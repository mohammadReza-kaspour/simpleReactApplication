import React, { Component } from 'react';
import { Card } from './card.component';

import styles from "./styles/cards.style.module.css"

import image1 from "../assets/images/pot.png"
import image2 from "../assets/images/light.jpg"
import image3 from "../assets/images/tent.jpg"
import image4 from "../assets/images/midTent.jpg"

const data = [
    {id:1,image:image1, name:"pot for camp", cost:"20$"},
    {id:2,image:image2, name:"night light", cost:"5$"},
    {id:3,image:image3, name:"small tent" ,cost:"50$"},
    {id:4,image:image4, name:"mid size tent", cost:"75$"}
];


export class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                {data.map(item => <Card key={item.id} Image={item.image} name={item.name} cost={item.cost} />)}
            </div>
        );
    }
}