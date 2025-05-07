import css from './Feedback.css';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedback}>
      <h2 className={css.title}>Feedback Statistics</h2>
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        
        {/* Step 5: Total feedback count */}
        <li className={css.item}>Total: {totalFeedback}</li>
        
        {/* Step 5: Positive feedback percentage */}
        <li className={css.item}>Positive feedback: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;