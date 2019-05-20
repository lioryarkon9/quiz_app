import React from 'react';
import AppWrapper from './views/AppWrapper';
import HandleQuestions from './HandleQuestions';


class Root extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            CurrentQuestion: props.AllQuestions.head
        }
    }

    render () {
        console.info(this);
        return (
            <AppWrapper/>
        );
    }
}

Root.defaultProps = {
    AllQuestions: {head: null}
}

export default HandleQuestions(Root);