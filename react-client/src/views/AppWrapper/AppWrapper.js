import React from 'react';
import './AppWrapper.css';

const AppWrapper = props => (
    <div id='AppWrapper'>

        <div id='content-container'>
            {props.content}
        </div>

        <div id='final-score-container'>
            <div id='final-score-div'>
                {props.finalScore !== null ? props.finalScore : ''}
            </div>
        </div>

        <div id='controllers'>
            <div className='btn-container'>
                <div 
                    className={props.Prev.isDisabled ? 'btn btn-disabled' : 'btn'}
                    onClick={props.Prev.handlePrevClick}
                >
                    <span>{props.Prev.label}</span>
                </div>
            </div>
            
            <div className='btn-container'>
                <div 
                    className='btn'
                    onClick={props.Next.handleNextClick}
                >
                    <span>{props.Next.label}</span>
                </div>
            </div>
        </div>

    </div>
    
);

AppWrapper.defaultProps = {
    content: <div>defaultContent</div>,
    Next: {
        handleNextClick: e => console.info('default  handleNextClick fired'),
        label: 'Next'
    },
    Prev: {
        handlePrevClick: e => console.info('default  handlePrevClick fired'),
        label: 'Prev',
        isDisabled: false
    },
    finalScore: null
}

export default AppWrapper;