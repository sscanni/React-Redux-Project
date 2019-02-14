export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

//Questions Action Creator
export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}