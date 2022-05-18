import styles from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

export default function ImageGalleryItem({ onClickItem, id, largeImageURL, tags, webformatURL })  {
    return (
        <li className={styles.gallery_item}>
            <img className={styles.gallery_item__image} src={webformatURL} alt={tags} onClick={() => { onClickItem() }}/>
        </li>
    );
};

// ImageGalleryItem.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChangeFilter: PropTypes.func.isRequired,
// }