import React from 'react';
import './SingleAnswer.css';

const SingleAnswer = props => (
    <div
        className='SingleAnswer'
        onClick={e => props.handleAnswerClick(props.id)}
    >
        <div>
            <span>{props.id}. </span>
            <span
                className={props.UserReaction === props.id ? 'selected' : ''}
            >
                {props.value}
            </span>
        </div>
    </div>
);

SingleAnswer.defaultProps = {
    id: '45',
    value: 'default singleAnswer value',
    handleAnswerClick: answerId => {
        console.info('default handleAnswerClick fired with answer_id: ', answerId);
    }
}

export default SingleAnswer;