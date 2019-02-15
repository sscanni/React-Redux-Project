import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import avatar from './img_avatar3.png'
class NavBar extends React.Component {

    render() {
        //const avatar = './img_avatar3.png'
        //const avatar = 'http://localhost:3000/src/components/img_avatar3.png'
        //const avatar = 'https://tylermcginnis.com/would-you-rather/sarah.jpg'
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
                                <Link className="navlink navitem" to='/'>Hello, John Doe</Link>
                            </div>
                        </li>   
                        <li className="nav-item">
                            <div className="nav-link avatar-div pl-0">
                                <img src={avatar} alt='John Doe' className='rounded-circle navtar'/> 
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
        
function mapStateToProps({questions, users }) {
    return {
                questionIds: Object.keys(questions),
                userIds: Object.keys(users),
                questions,
                users
            }
        }
        
export default connect(mapStateToProps)(NavBar);