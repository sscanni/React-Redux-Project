import { saveQuestionAnswer } from '../utils/api'
import { saveQuestion } from '../utils/api'
//import { ansQuestUser } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

//Questions Action Creator
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
export function ansQuestion(question) {
    return {
        type: ANSWER_QUESTION,
        question,
    }
}
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}
export function handleAnsQuest(authedUser, qid, answer) {
    return (dispatch) => {

        dispatch(showLoading())

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })  
            // .then((question) => {
            //     dispatch(ansQuestion(question))
            //     dispatch(ansQuestUser(question))
            //     dispatch(hideLoading())
            // // .then(() => dispatch(hideLoading()))
            // })
            .then((question) => dispatch(ansQuestion(question)))
            .then(() => dispatch(hideLoading()))
        }
}

export function handleAddQuest(author, optionOneText, optionTwoText) {
    console.log("handleAddQuest: optionOneText=", optionOneText)
    console.log("handleAddQuest: optionTwoText=", optionTwoText)
    console.log("handleAddQuest: author=", author)
    return (dispatch) => {

        dispatch(showLoading())

        return saveQuestion({
            author,
            optionOneText,
            optionTwoText
        })  
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
        }
}