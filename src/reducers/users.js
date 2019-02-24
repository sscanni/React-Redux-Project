import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION_USER } from '../actions/users'

export default function users (state = {}, action) {

    switch(action.type) {
        case RECEIVE_USERS : 
            return {
                ...state,
                ...action.users
            }

        case ANSWER_QUESTION_USER : 
            return {
                ...state,
                [action.question.authedUser]: {
                    ...state[action.question.authedUser],
                    answers: {
                        ...state[action.question.authedUser]['answers'],
                        [action.question.qid]: action.question.answer
                    }
                }
            }
            
        default :
            return state
    }
}