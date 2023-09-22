import React, { Component } from 'react';

import styles from "./styles/card.style.module.css"

import plus from "../assets/icons/plus.svg"
import minus from "../assets/icons/minus.svg"

export class Card extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }

    plusClickHandler = () => {
        console.log(this.state);
        this.setState((prevState) => ({
            counter : prevState.counter+1,
        }));
    }

    minusClickHandler = () => {
        this.setState((prevState) => ({
            counter : prevState.counter<=0 ? 0:prevState.counter-1,
        }));
    }

    render() {
        return (
            <div className={styles.container}>
                <img alt="cardImage" src={this.props.Image} className={styles.image} />
                <div className={styles.informarionBox}>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.cost}</p>
                </div>
                <div className={styles.countBox}>
                    <img src={plus} alt="add-and-delete-icon" onClick={this.plusClickHandler}/>
                    <span>{this.state.counter}</span>
                    <img src={minus} alt="add-and-delete-icon" 
                        className={this.state.counter === 0 ? styles.deactiveButton : null} 
                        onClick={this.minusClickHandler}/>
                </div>
            </div>
        );
    }
}