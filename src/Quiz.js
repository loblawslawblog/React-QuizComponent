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
            display = <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />;
        }
        else
        {
            display = <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />;
        }

        return <div>{display}</div>
    }

    showNextQuestion() {
        this.setState((state) => {return {quiz_position: state.quiz_position + 1}});
    }

    handleResetClick() {
        this.setState({quiz_position: 1});
    }

    constructor(props) {
        super(props);

        this.state = {quiz_position: 1};
    }
}

export default Quiz