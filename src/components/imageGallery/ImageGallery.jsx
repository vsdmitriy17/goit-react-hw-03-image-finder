import styles from './ImageGallery.module.css';
import React, { Component } from 'react';
import axios from "axios";
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem.jsx';
import Button from '../button/Button.jsx';
import Loader from '../loader/Loader.jsx';
import Modal from '../modal/Modal.jsx';
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
        showLoader: false,
        showModal: false,
        page: 1,
        images: [],
        largeImg: "",
        tags: "",
        totalImg: 0,
        error: null,
    }

    async componentDidUpdate(prevProps, prevState) {
        try {
            if (prevProps.qwery !== this.props.qwery) {
                await this.setState({
                    showLoader: true,
                    showModal: false,
                    page: 1,
                    images: [],
                    largeImg: "",
                    tags: "",
                    totalImg: 0,
                    error: null,
                });

                const dataObject = await axios.get(`${this.BASE_URL}?q=${this.props.qwery}&page=${this.state.page}&${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`); // запрос через библ. axios
                console.log(dataObject.data.hits);
                await this.setState({ showLoader: false });

                (dataObject.data.hits.length !== 0) ? await this.setState({
                    images: dataObject.data.hits,
                    totalImg: dataObject.data.totalHits,
                }) : alert("Sorry, there is no such qwery.");
            }
        } catch (error) {
            await this.setState({
                showLoader: false,
                error,
            });
        }
    }

    onLoadMoreClick = async () => {

        try {
            await this.setState(prevState => ({
                showLoader: true,
                page: prevState.page + 1
            }));
            const dataObject = await axios.get(`${this.BASE_URL}?q=${this.props.qwery}&page=${this.state.page}&${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`); // запрос через библ. axios
            console.log(dataObject.data.hits);

            await this.setState({
                showLoader: false,
                images: dataObject.data.hits,
                totalImg: dataObject.data.totalHits,
            })
        } catch (error) {
            await this.setState({ error });
        }
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

    render() {
        return (
            <>
                {this.state.showLoader && <Loader />}
                <ul className={styles.gallery}>
                    {this.state.error ? alert("ERROR!") : 
                    this.state.images.map(img => {
                        const { id, largeImageURL, tags, webformatURL} = img;
                        return <ImageGalleryItem
                            onClickItem={this.onImgClick}
                            key={id}
                            largeImageURL={largeImageURL}
                            tags={tags}
                            webformatURL={webformatURL}
                        />
                    })}
                </ul>
                {this.state.showModal && <Modal onClickClose={this.toggleModal} largeImg={this.state.largeImg} tags={this.state.tags} />}
                {((this.state.images.length !== 0) && (this.state.page !== Math.ceil(this.state.totalImg/12))) && <Button onLoadClick={this.onLoadMoreClick} />}
            </>
        );
    }
};

// ImageGallery.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// }
