import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Event extends Component {
  state = {
    isLoading : true,
    moments : []
  }



  render() {

    return (
      <div >   

        <h1>Events here</h1>
          <div className="row">
        {this.state.isLoading ?  <h1>Loading page  here</h1> : this.state.moments.map(moment => (
          <div className="card col-4" key={moment.title}>
          <div className="card" key={moment.title}>
            <img className="card-img-top" src="https://preview.redd.it/3uoi8doopws11.jpg?auto=webp&s=63528e14464b748a13efc4144b600f3ea3d79818" alt='img'/>
            
            <div className="card-body">
              <h5 className="card-title">{moment.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`/events/${moment.id}`} className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
          </div>
        ))}
          </div>
       
      </div>
   
    )
  }
}


const Event = ({event}) =>{
<div >   

<h1>Events here</h1>
  <div className="card col-4" key={moment.title}>
  <div className="card" key={moment.title}>
    <img className="card-img-top" src="https://preview.redd.it/3uoi8doopws11.jpg?auto=webp&s=63528e14464b748a13efc4144b600f3ea3d79818" alt='img'/>
    
    <div className="card-body">
      <h5 className="card-title">{moment.title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to={`/events/${moment.id}`} className="btn btn-primary">{moment.id}</Link>
    </div>
  </div>
  </div>
</div>
}