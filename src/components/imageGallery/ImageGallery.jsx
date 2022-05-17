import styles from './ImageGallery.module.css';
// import PropTypes from 'prop-types';

export default function ImageGallery({ children }) {
    return (
        <ul className={styles.gallery}>
            {children}
        </ul>
    );
};

// ImageGallery.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// }
