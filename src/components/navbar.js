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
                                <Link className="navlink" to='/new'>New Question</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link pl-4">
                                <Link className="navlink" to='/leaders'>Leader Board</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item">
                            <div className="nav-link">
                                <span className="navlink navitem">Hello, {this.props.users[this.props.authedUser].name}</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link avatar-div pl-0">
                                <img src={'/avatars/' + this.props.users[this.props.authedUser].avatarURL} alt='user' className='rounded-circle navtar' />
                            </div>
                        </li>
                        <li className="nav-item pl-4">
                            <div className="nav-link">
                                <Link className="navlink navitem" to='/login'>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(NavBar);