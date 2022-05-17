import React, { Component } from 'react';
// import { nanoid } from "nanoid";
import styles from './SearchForm.module.css';

class SearchForm extends Component {
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
                <form className={styles.form}>
                    <button type="submit" className={styles.form_button}>
                        <span className={styles.form_button__label}>Search</span>
                    </button>

                    <input
                        className={styles.form_input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
        );
    }
};

export default SearchForm;