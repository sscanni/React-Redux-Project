const logger = (store) => (next) => (action) => {
    // console.group(action.type)
        //console.log('The action: ', action)
        const returnValue = next(action)
        // console.log('The new state: ', store.getState())
        const {authedUsers, users, questions} = store.getState()
        console.log("authedUsers=", authedUsers)
        console.log("users=", users)
        console.log("questions=", questions)
    // console.groupEnd()
    return returnValue
}

export default logger