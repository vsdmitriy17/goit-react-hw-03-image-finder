import styles from './ImageGalleryItem.module.css';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
    render() {
        return (
            <li className={styles.gallery_item}>
                <img
                    className={styles.gallery_item__image}
                    src={this.props.data.webformatURL}
                    alt={this.props.data.tags}
                    onClick={() => { this.props.onClickItem(this.props.data.largeImageURL, this.props.data.tags) }}
                    id={this.props.data.id}
                />
            </li>
        );
    }
};

// ImageGalleryItem.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChangeFilter: PropTypes.func.isRequired,
// }