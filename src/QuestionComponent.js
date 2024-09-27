import React from 'react';

const QuestionComponent = ({ question, handleAnswer }) => {
    return (
        <div className="question">
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => handleAnswer(option.isCorrect)}>
                            {option.text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default QuestionComponent;
