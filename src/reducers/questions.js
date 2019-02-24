import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {

    switch(action.type) {
        case RECEIVE_QUESTIONS : 
            return {
                ...state,
                ...action.questions        // merge all the questions onto the state
            }

        case ANSWER_QUESTION : 
            return {
                ...state,
                [action.question.qid]: {
                    ...state[action.question.qid],
                    [action.question.answer]: {
                        votes:
                        state[action.question.qid][action.question.answer].votes.concat(action.question.authedUser),
                        text: state[action.question.qid][action.question.answer].text 
                    }
                }
            }
            
        default :
            return state
    }
}