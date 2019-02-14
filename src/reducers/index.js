import { combineReducers } from 'redux'
import authedUsers from './authedUsers'
import users from './users'
import questions from './questions'

export default combineReducers({
    authedUsers,
    users,
    questions
})