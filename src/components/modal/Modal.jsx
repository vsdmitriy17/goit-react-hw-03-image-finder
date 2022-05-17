import styles from './Modal.module.css';
// import PropTypes from 'prop-types';

export default function Modal({value, onChangeFilter})  {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <img src="" alt="" />
            </div>
        </div>
    );
};

// Modal.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChangeFilter: PropTypes.func.isRequired,
// }