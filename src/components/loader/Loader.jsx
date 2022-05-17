import styles from './Loader.module.css';
// import PropTypes from 'prop-types';

export default function Loader({ contacts, onDeleteContact }) {
    return (
        <button type="button" className={styles.gallery_item}>Loader</button>
    );
};

// Loader.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// }