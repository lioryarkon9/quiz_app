import React from 'react';
import './SingleQuestion.css';
import SingleAnswer from '../../components/SingleAnswer';

const SingleQuestion = props => (
    <div id='SingleQuestion'>
        <div id='question-zone'>
            <span id='q-id-span'>{props.id}. </span>
            <span id='q-value-span'>{props.value}</span>
        </div>

        <div id='options-zone'>
            {props.options.map(singleAnswer => (
                <SingleAnswer
                    key={'_single_answer-' + singleAnswer.id}
                    id={singleAnswer.id}
                    value={singleAnswer.value}
                    handleAnswerClick={props.handleAnswerClick}
                    UserReaction={props.UserReaction}
                />
            ))}
        </div>
    </div>
);

SingleQuestion.defaultProps = {
    id: "33",
    value: "This is the default question",
    correctAnswer: {id: "4", value: "London"},
    options: [
        {id: "1", value: "Paris"},
        {id: "2", value: "Moscow"},
        {id: "3", value: "Jerusalem"},
        {id: "4", value: "London"}
    ],
    UserReaction: null
}

export default SingleQuestion;