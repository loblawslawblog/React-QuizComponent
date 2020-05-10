import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component
{
    render() {
        const isQuizEnd = this.state.quiz_position-1 === quizData.quiz_questions.length;

        let display;
        if (isQuizEnd)
        {
            display = <QuizEnd />;
        }
        else
        {
            display = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />;
        }

        return <div>{display}</div>
    }

    constructor(props) {
        super(props);

        this.state = {quiz_position: 1};
    }
}

export default Quiz