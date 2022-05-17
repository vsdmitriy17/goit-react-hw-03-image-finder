import React, { Component } from 'react';
// import { nanoid } from "nanoid";
import styles from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        name: '',
        number: ''
    }

    // handleSubmit = evt => {
    //     evt.preventDefault();
    //     const data = {
    //         id: nanoid(),
    //         ...this.state,
    //     }
    //     this.props.onSubmit(data);
    //     this.resetForm();
    // }

    // handleInputChange = evt => {
    //     this.setState({[evt.currentTarget.name]: evt.currentTarget.value});
    // }

    // resetForm = () => {
    //     this.setState({
    //         name: '',
    //         number: ''
    //     });
    // }
    
    render() {
        return (
            <header className={styles.searchbar}>
                {this.props.children}
            </header>
        );
    }
};

export default Searchbar;