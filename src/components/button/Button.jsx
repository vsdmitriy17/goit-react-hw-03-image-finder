import styles from './Button.module.css';
// import PropTypes from 'prop-types';

export default function Button({ contacts, onDeleteContact }) {
    return (
        <button type="button" className={styles.button}>Load more</button>
    );
};

// Button.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// }