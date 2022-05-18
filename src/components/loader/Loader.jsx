import styles from './Loader.module.css';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Loader extends Component {
    render() {
        return (
            <p className={styles.loader}>Load...</p>
        );
    }
};

// Loader.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// }