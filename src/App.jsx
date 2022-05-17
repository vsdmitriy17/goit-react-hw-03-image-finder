import React, { Component } from 'react';
import styles from './App.module.css';
import ImageGallery from './components/imageGallery/ImageGallery.jsx';
import Searchbar from './components/searchbar/Searchbar.jsx';
import SearchForm from './components/searchForm/SearchForm.jsx';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem.jsx';
import Loader from './components/loader/Loader.jsx';
// import Modal from './components/modal/Modal.jsx';
import Button from './components/button/Button.jsx';

class App extends Component {
    state = {
        contacts: [],
        filter: ''
    }

    // formSubmit = data => {
    //     this.setState(prevState => {
    //         const isNameExist = prevState.contacts.find(contact => contact.name === data.name);
    //         return (isNameExist ? alert(`${data.name} is already in contacts`) : {...prevState, contacts: [data, ...prevState.contacts]}); 
    //     })
    // }

    // deleteContact = (currentId) => {
    //     this.setState(prevState => {
    //         return {
    //             ...prevState,
    //             contacts: prevState.contacts.filter(contact => contact.id !== currentId),
    //         }
    //     })
    // }

    // changeFilter = (evt) => {
    //     this.setState({
    //         ...this.state,
    //         filter: evt.currentTarget.value,
    //     })
    // }

    // getVisibleContacts = () => {
    //     const filterNormalized = this.state.filter.toLowerCase();
    //     return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalized));
    // }
    
    render() {

        return (
            <div className={styles.app}>
                <Searchbar>
                    <SearchForm />
                </Searchbar>
                <Loader />
                <ImageGallery>
                    <ImageGalleryItem />
                </ImageGallery>
                <Button />
                {/* <Modal /> */}
            </div>
        );
    };
};

export default App;
