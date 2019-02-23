import React from 'react';
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {

    render() {

        const trophyOneStyle = 
            {color: "rgb(197, 168, 0)"}
        // const imageStyle = 
        //     {width: "100px"}

        return (
            <div className="container col-md-4 mt-3">
                <div className="card">
                    <div className="card-body">
                        <div className="media">
                            <div className="trophy-background">
                                <span className="trophy "><i className='fas fa-trophy' style={{trophyOneStyle}}></i></span>
                            </div>
                            {/* <img src="img_avatar3.png" alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{imageStyle}}></img> */}
                            <div className="pl-3 media-body border border-top-0 border-bottom-0 border-right-0">
                                <h3><strong>John Doe</strong></h3>
                                <br></br>
                                <strong>
                                    <div className="float-left">Answered questions:</div>
                                    <div className="float-right pr-5">5</div><br></br><br></br>

                                    <div className="float-left">Created questions:</div>
                                    <div className="float-right pr-5">5</div><br></br><br></br>
                                </strong>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <p className="text-center"><strong>Score</strong></p>
                                </div>
                                <div className="card-body">
                                    <p className="text-center"><strong>5</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
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

export default connect(mapStateToProps)(LeaderBoard);