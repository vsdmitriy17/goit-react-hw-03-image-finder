import styles from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

export default function ImageGalleryItem({value, onChangeFilter})  {
    return (
        <li className={styles.gallery_item}>
            <img className={styles.gallery_item__image} src="" alt="" />
        </li>
    );
};

// ImageGalleryItem.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChangeFilter: PropTypes.func.isRequired,
// }