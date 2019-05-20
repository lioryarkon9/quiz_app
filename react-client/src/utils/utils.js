export function getItemScore (questionItem, singleQuestionScore) {
    let res = 0;
    switch (questionItem.UserReaction) {
        case null:
            return res;
        default:
           if (questionItem.correctAnswer.id === questionItem.UserReaction) {
               res = singleQuestionScore;
           } 
    }

    return res;
}