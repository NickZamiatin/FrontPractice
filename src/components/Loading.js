import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Loading extends Component {
  render() {
    return (
    <div>
    <div className="jumbotron">
  <h1 className="display-3">Are you ready for a job!</h1>
  <p className="lead">Nick Zamiatin Front</p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <Link   to="/events" className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
  </p>
</div>
    </div>

    )
  }
}

export default Loading
