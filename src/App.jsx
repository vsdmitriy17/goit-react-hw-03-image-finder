import React, { Component } from 'react';
import ImageGallery from './components/imageGallery/ImageGallery.jsx';
import Searchbar from './components/searchbar/Searchbar.jsx';
import SearchForm from './components/searchForm/SearchForm.jsx';

class App extends Component {
    state = {
        qwery: "",
        startPage: 1
    }

    formSubmit = data => {
        this.setState({
            qwery: data.qwery
        })
    }

    
    render() {
        return (
            <>
                <Searchbar>
                    <SearchForm onSubmit={this.formSubmit} />
                </Searchbar>
                <ImageGallery qwery={this.state.qwery} startPage={this.state.startPage}/>
            </>
        );
    };
};

export default App;
