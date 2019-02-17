import React from 'react';
import { connect } from 'react-redux'

class Login extends React.Component {

    render() {
        return (
            <div>
                <h3>Login</h3>
            </div>
        )
    }
}

function mapStateToProps({ questions, users }) {
    return {
        questionIds: Object.keys(questions),
        userIds: Object.keys(users),
        questions,
        users
    }
}

export default connect(mapStateToProps)(Login);