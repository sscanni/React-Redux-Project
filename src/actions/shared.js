import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUsers'

//const AUTHED_ID = 'tylermcginnis'
const AUTHED_ID = 'sarahedo'
//const AUTHED_ID = 'johndoe'

// This uses the redux Thunk pattern
export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}