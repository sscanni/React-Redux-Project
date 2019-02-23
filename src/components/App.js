import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import LoadingBar from 'react-redux-loading'
import Home from './Home'
import Answered from './Answered'
import Results from './Results'
import Questions from './Questions'
import AddQuestion from './AddQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import NavBar from './NavBar'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          {/* <LoadingBar /> */}
          {/* <div className='container'> */}
            {/* <Nav /> */}
            {this.props.loading === true
              ? null
              : <div>
                  <NavBar />
                  <Route path='/' exact component={Home} />
                  <Route path='/answered' component={Answered} />
                  <Route path='/results/:id' component={Results} />
                  <Route path='/questions/:id' component={Questions} />
                  <Route path='/add' component={AddQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />                  
                  <Route path='/login' component={Login} />                  
                </div>}
          {/* </div> */}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)