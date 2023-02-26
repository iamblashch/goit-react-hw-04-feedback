import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={css.feedbackBtnBox}>
            {options.map(key => (
                <li key={key}>
                    <button
                        className={css.feedbackBtn}
                        type="button"
                        onClick={() => onLeaveFeedback(key)}
                    >
                        {key}
                    </button>
                </li>
            ))}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired,
};
