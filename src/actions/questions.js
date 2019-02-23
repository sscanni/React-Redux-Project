import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

//Questions Action Creator
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
export function ansQuestion(question) {
    console.log("ansQuestion action question=", question)
    return {
        type: ANSWER_QUESTION,
        question,
    }
}

export function handleAnsQuest(authedUser, qid, answer) {
    return (dispatch) => {

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })  
            .then((question) => dispatch(ansQuestion(question)))
            // .then((users) => dispatch(ansQuestUser(users)))
            // .then(() => dispatch(hideLoading()))
    }
}