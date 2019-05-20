import React from 'react';
import AppWrapper from './views/AppWrapper';
import HandleQuestions from './HandleQuestions';
import SingleQuestion from './views/SingleQuestion';


class Root extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            CurrentQuestion: props.AllQuestions.head,
            finalScore: null
        }

        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.getPrevConfig = this.props.getPrevConfig.bind(this);
        this.getNextConfig = this.props.getNextConfig.bind(this);
        this.calcResult = this.props.calcResult.bind(this);
    }

    handleAnswerClick (answerId) {
        this.setState(prevState => {
            prevState.CurrentQuestion.UserReaction = answerId;
            return prevState;
        });
    }

    render () {
        return (
            <AppWrapper
                content={<SingleQuestion
                    id={this.state.CurrentQuestion.id}
                    value={this.state.CurrentQuestion.value}
                    correctAnswer={this.state.CurrentQuestion.correctAnswer}
                    options={this.state.CurrentQuestion.options}
                    UserReaction={this.state.CurrentQuestion.UserReaction}
                    handleAnswerClick={this.handleAnswerClick}
                />}
                Next={this.getNextConfig()}
                Prev={this.getPrevConfig()}
                finalScore={this.state.finalScore}
            />
        );
    }
}

Root.defaultProps = {
    AllQuestions: {head: null}
}

export default HandleQuestions(Root);