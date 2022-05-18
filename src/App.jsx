import React, { Component } from 'react';
import styles from './App.module.css';
import ImageGallery from './components/imageGallery/ImageGallery.jsx';
import Searchbar from './components/searchbar/Searchbar.jsx';
import SearchForm from './components/searchForm/SearchForm.jsx';
import Loader from './components/loader/Loader.jsx';
import Modal from './components/modal/Modal.jsx';
import Button from './components/button/Button.jsx';

class App extends Component {
    state = {
        showLoader: false,
        qwery: "",
        showModal: false,
        largeImg: "",
        tags: ""
    }

    toggleModal = () => {
        this.setState(prevState =>
            ({ showModal: !prevState.showModal }));
    };

    toggleLoader = () => {
        this.setState(prevState =>
            ({ showLoader: !prevState.showLoader }));
    };

    onImgClick = (imgURL, tags) => {
        this.setState({
            largeImg: imgURL,
            tags: tags
        });
        this.toggleModal();
    }

    formSubmit = data => {
        this.setState({ qwery: data.qwery })
    }

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
        const { showLoader, showModal } = this.state;

        return (
            <>
                <Searchbar>
                    <SearchForm onSubmit={this.formSubmit} />
                </Searchbar>
                <main className={styles.container}>
                    {showLoader && <Loader />}
                    <ImageGallery qwery={this.state.qwery} onClickItem={this.onImgClick} onSearchSubmit={this.toggleLoader}/>
                    <Button />
                    {showModal && <Modal onClickClose={this.toggleModal} largeImg={this.state.largeImg} tags={this.state.tags} />}
                </main>
            </>
        );
    };
};

export default App;
