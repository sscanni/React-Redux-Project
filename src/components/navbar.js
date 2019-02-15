import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-secondary">
                <div className="container col-md-6">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <div className="nav-link">
                                <Link className="navlink" to='/'>Home</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link pl-4">
                                <Link className="navlink" to='/'>New Question</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link pl-4">
                                <Link className="navlink" to='/'>Leader Board</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item">
                            <div className="nav-link">
                                {((this.props.authedUsers)
                                    ? <Link className="navlink navitem" to='/'>Hello, {this.props.users[this.props.authedUsers].name}</Link>
                                    : ""
                                )}
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link avatar-div pl-0">
                                {((this.props.authedUsers)
                                    ? <img src={'/avatars/' + this.props.users[this.props.authedUsers].avatarURL} alt='user' className='rounded-circle navtar' />
                                    : ""
                                )}
                            </div>
                        </li>
                        <li className="nav-item pl-4">
                            <div className="nav-link">
                                <Link className="navlink navitem" to='/'>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ questions, users, authedUsers }) {
    return {
        questionIds: Object.keys(questions),
        userIds: Object.keys(users),
        questions,
        users,
        authedUsers
    }
}

export default connect(mapStateToProps)(NavBar);