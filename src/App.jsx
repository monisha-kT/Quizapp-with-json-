import { useState } from 'react';
import './App.css';
import questions from './assets/questions.json';

function App() {
  const [question, setQuestions] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizend, setQuizend] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // Increment the score if the answer is correct
    if (answer === questions[question].correctAnswer) {
      setScore(score + 1);
    }

    // Check if it's the last question
    if (question < questions.length - 1) {
      setQuestions(question + 1);
      setAnswer('');
    } else {
      setQuizend(true); // Set quiz as ended
    }
  };

  return (
    <>
      <div>
        <div className="box">
          <div className="header">
            <h3>QUIZAPP</h3>
          </div>

          {/* Conditionally render the quiz or final score */}
          {quizend ? (
            <div className="final-score">
              <h2>Quiz Finished!</h2>
              <p>Your final score is: {score} / {questions.length}</p>
            </div>
          ) : (
            <>
              <div className="QuestionNo">
                <h5>Question {question + 1}</h5>
              </div>
              <div className="Questionfield">
                <h4>{questions[question].question}</h4>
              </div>
              <div className="answer-field">
                <ul>
                  {questions[question].options.map((option, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        onChange={(e) => setAnswer(e.target.value)}
                      />
                      {option}
                    </li>
                  ))}
                </ul>
                <button className="submitbutton" onClick={onHandleSubmit}>
                  {question === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
