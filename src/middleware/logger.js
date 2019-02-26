const logger = (store) => (next) => (action) => {
    // console.group(action.type)
        //console.log('The action: ', action)
        const returnValue = next(action)
        // console.log('The new state: ', store.getState())

        const {authedUser, users, questions} = store.getState()
        console.log("new state: authedUser=", authedUser)
        console.log("new state: users=", users)
        console.log("new state: questions=", questions)
        
    // console.groupEnd()
    return returnValue
}

export default logger