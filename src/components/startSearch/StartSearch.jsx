import styles from './StartSearch.module.css';
import React, { Component } from 'react';
import startImg from '../img/bgImage_1600.jpg';
// import { ReactComponent as StartImg } from '../img/bgImage_1600.jpg';
// import PropTypes from 'prop-types';

export default class StartSearch extends Component {
    render() {
        return (
            <main className={styles.start}>
                <h1 className={styles.startTitle}>LIFES COLORS</h1>
                {/* <StartImg width="100%" opacity="0.5" /> */}
                <img
                    className={styles.startImage}
                    src={startImg}
                    alt="startImage"
                />
            </main >
        );
    }
};
