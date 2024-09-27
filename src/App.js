import React, { useState } from 'react';
import QuestionComponent from './QuestionComponent';
import ResultComponent from './ResultComponent';
import quizData from './QuizData';
import './App.css';

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <div>
            <h1>HeroQuest</h1>
            {quizFinished ? (
                <ResultComponent score={score} totalQuestions={quizData.length} />
            ) : (
                <QuestionComponent
                    question={quizData[currentQuestion]}
                    handleAnswer={handleAnswer}
                />
            )}
        </div>
    );
};

export default App;
