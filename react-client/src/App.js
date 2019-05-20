import React from 'react';
import AppWrapper from './views/AppWrapper';
import HandleQuestions from './HandleQuestions';


class Root extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            CurrentQuestion: props.AllQuestions.head
        }

        this.getNextConfig = this.getNextConfig.bind(this);
        this.getPrevConfig = this.getPrevConfig.bind(this);
    }

    getNextConfig () {
        let currentQuestion = this.state.CurrentQuestion;
        let isNextQuestion = currentQuestion.Next;
        switch (isNextQuestion) {
            case null:
                return {
                    handleNextClick: e => console.warn('done: no handler'),
                    label: 'Done'
                };
            default: 
                return {
                    handleNextClick: e => this.setState(prevState => {
                        prevState.CurrentQuestion = prevState.CurrentQuestion.Next;
                        return prevState;
                    }),
                    label: 'Next'
                }
        }
    }

    getPrevConfig () {
        let currentQuestion = this.state.CurrentQuestion;
        let isPrevQuestion = currentQuestion.Prev;
        switch (isPrevQuestion) {
            case null:
                return {
                    handlePrevClick: e => console.warn('first item: no handler'),
                    label: 'Prev',
                    isDisabled: true
                };
            default: 
                return {
                    handlePrevClick: e => this.setState(prevState => {
                        prevState.CurrentQuestion = prevState.CurrentQuestion.Prev;
                        return prevState;
                    }),
                    label: 'Prev'
                }
        }
    }

    render () {
        console.info(this);
        return (
            <AppWrapper
                Next={this.getNextConfig()}
                Prev={this.getPrevConfig()}
            />
        );
    }
}

Root.defaultProps = {
    AllQuestions: {head: null}
}

export default HandleQuestions(Root);