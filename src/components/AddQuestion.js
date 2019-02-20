import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NewQuestion extends React.Component {

    render() {
        return (
            <div>
                <div className="container col-md-4 mt-3">
                    <div className="card-body">
                        <div class="card">
                            <h4 className="card-header text-center">Create New Question</h4>
                            <div className="card-body">
                                <p>Complete the question</p>
                                <h5>Would You Rather ...</h5><br></br>
                                <div className="form-group">
                                    <input type="text" className="form-control" id=""></input>
                                </div>
                                <strong>
                                    <p className="text-center">OR</p>
                                </strong>
                                <div className="form-group">
                                    <input type="text" className="form-control" id=""></input>
                                </div>                
                                {/* <a href="index.html" className="btn btn-outline-primary btn-sm btn-block">Submit</a> */}
                                <Link to='/'>
                                    <button className="btn btn-outline-primary btn-sm btn-block">Submit</button>
                                </Link>
                            </div>
                        </div>
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

export default connect(mapStateToProps)(NewQuestion);