import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {

    render() {
        return (
            <div>
                <h3 className='center'>Test</h3>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <div>{this.props.users[this.props.questions[id].author].name} asks...</div>
                            <div>{this.props.questions[id].optionOne.text}</div>
                            <div>{this.props.questions[id].optionTwo.text}</div>
                            <hr></hr>
                        </li>
                    ))}
                </ul>
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

export default connect(mapStateToProps)(Home);