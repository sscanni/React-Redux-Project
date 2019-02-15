import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import NavBar from './navbar'

class Home extends React.Component {

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <div>
                        <NavBar />
                        <div className="container col-md-4 mt-3">
                            <p>Unanswered Questions</p>
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
                )} />
                <Route exact path='/answered' render={() => (
                    <div>
                        <NavBar />
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
                )} />
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