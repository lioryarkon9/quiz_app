import React from 'react';
import './AppWrapper.css';

const AppWrapper = props => (
    <div id='AppWrapper'>

        <div id='content-container'>
            {props.content}
        </div>

        <div id='controllers'>
            <div className='btn-container'>
                <div 
                    className='btn'
                    onClick={props.handlePrevClick}
                >
                    <span>{props.labelPrev}</span>
                </div>
            </div>
            <div className='btn-container'>
                <div 
                    className='btn'
                    onClick={props.handleNextClick}
                >
                    <span>{props.labelNext}</span>
                </div>
            </div>
        </div>

    </div>
    
);

AppWrapper.defaultProps = {
    content: <div>defaultContent</div>,
    handlePrevClick: e => console.info('default  handlePrevClick fired'),
    handleNextClick: e => console.info('default  handleNextClick fired'),
    labelNext: 'Next',
    labelPrev: 'Prev'
}

export default AppWrapper;