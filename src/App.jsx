import React, { Component } from 'react';
import styles from './App.module.css';
import ImageGallery from './components/imageGallery/ImageGallery.jsx';
import Searchbar from './components/searchbar/Searchbar.jsx';
import SearchForm from './components/searchForm/SearchForm.jsx';

class App extends Component {
    state = {
        qwery: "",
    }

    formSubmit = data => {
        this.setState({
            qwery: data.qwery,
        })
    }

    // formSubmitNone = data => {
    //     this.setState({
    //         qwery: "",
    //     })
    // }

    
    render() {
        return (
            <>
                <Searchbar>
                    <SearchForm onSubmit={this.formSubmit} />
                </Searchbar>
                <main className={styles.container}>
                    <ImageGallery qwery={this.state.qwery} />
                </main>
            </>
        );
    };
};

export default App;
