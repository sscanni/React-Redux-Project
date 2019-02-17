import React from 'react';
import { connect } from 'react-redux'
//import NavBar from './navbar'

class Answered extends React.Component {

    viewPoll = (e, id) => {
        e.preventDefault()

        alert(id)
    }
    render() {
        return (
            <div className="app">
                <div>
                    {/* <NavBar /> */}
                    <div className="container col-md-4 mt-3">
                        <p>Answered Questions</p>
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
                </div>
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

export default connect(mapStateToProps)(Answered);