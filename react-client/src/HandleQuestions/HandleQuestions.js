import React from 'react';
import questions from '../resources/questions.json';

const WithHandling = App => {
    return class HandleQuestions extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                AllQuestions: {head: null}
            }

            this.setQuestionsAsLinkedList = this.setQuestionsAsLinkedList.bind(this);
            this.addNextAndPrev = this.addNextAndPrev.bind(this);
        }

        componentWillMount () {
            this.setQuestionsAsLinkedList();
        }

        setQuestionsAsLinkedList () {
            this.setState(prevState => {
                let questionsList = questions;
                for (let i = questionsList.length - 1; i >= 0; i--) {
                    let currentItem = questionsList[i];
                    // adding neccessary Prev and Next properties for linkedList item 
                    currentItem = this.addNextAndPrev(currentItem);
                    // adding a property to save user's answer - null at first
                    currentItem = this.addUserReaction(currentItem);
                    let tmp = prevState.AllQuestions.head;
                    if (tmp) {
                        tmp.Prev = currentItem;
                        currentItem.Next = tmp;
                    }
                    prevState.AllQuestions.head = currentItem;                    
                }

                return prevState;
            });
        }

        addNextAndPrev (item) {
            item.Next = null;
            item.Prev = null;
            
            return item;
        }

        addUserReaction (item) {
            item.UserReaction = null

            return item;
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
            return (
                <App 
                    {...this.props} 
                    AllQuestions={this.state.AllQuestions}
                    getPrevConfig={this.getPrevConfig}
                    getNextConfig={this.getNextConfig}
                />
            );
        }
    }
}

export default WithHandling;