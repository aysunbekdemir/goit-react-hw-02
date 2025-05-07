
import { useState, useEffect } from 'react';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';
import css from './App.module.css';


function App() {

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });


  const { good, neutral, bad } = feedback;


  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };


  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };


  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback > 0 
    ? Math.round((good / totalFeedback) * 100)
    : 0;


  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
      
      <Options 
        feedback={feedback} 
        updateFeedback={updateFeedback} 
        totalFeedback={totalFeedback} 
        resetFeedback={resetFeedback} 
      />
      

      {totalFeedback > 0 ? (
        <Feedback 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          totalFeedback={totalFeedback} 
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;