export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION_USER = 'ANSWER_QUESTION_USER'

//Users Action Creator
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}
export function ansQuestUser(user) {
    return {
        type: ANSWER_QUESTION_USER,
        user,
    }
}