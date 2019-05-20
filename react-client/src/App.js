import React from 'react';
import AppWrapper from './views/AppWrapper';
import questions from './resources/questions.json';

class QuizApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            AllQuestions: {head: null},
            CurrentQuestion: null
        }
    }

    render () {
        return (
            <AppWrapper/>
        );
    }
}

QuizApp.defaultProps = {
    questionsList: questions
}

export default QuizApp;