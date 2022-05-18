import styles from './ImageGallery.module.css';
import React, { Component } from 'react';
import axios from "axios";
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem.jsx';
// import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
    constructor() {
        super();
        // путь к API - эндпоинт, базовый URL, точка входа в API.
        this.BASE_URL = 'https://pixabay.com/api/';
        // Ключ API
        this.API_KEY = 'key=25666738-83e6abd6c600844fdf6c33b5c';
        // параметры настроек (выборки) запроса
    }

    state = {
        page: 1,
        images: [],
        totalImg: 0,
        totalPages: 0,
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.qwery !== this.props.qwery) {
            const dataObject = await axios.get(`${this.BASE_URL}?q=${this.props.qwery}&page=${this.state.page}&${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`); // запрос через библ. axios
            console.log(dataObject.data.hits);

            this.setState(prevState => ({
                page: prevState.page + 1,
                images: dataObject.data.hits,
                totalImg: dataObject.data.total,
                totalPages: dataObject.data.totalHits,
            }))
        }
    }

    render() {
        return (
            <ul className={styles.gallery}>
                {this.state.images.map(img => {
                    const { id, largeImageURL, tags, webformatURL} = img;
                    return <ImageGalleryItem onClickItem={this.props.onClickItem} key={id} largeImageURL={largeImageURL} tags={tags} webformatURL={webformatURL}/>
                })}
            </ul>
        );
    }
};

// ImageGallery.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// }
