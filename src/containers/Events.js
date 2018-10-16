import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Events extends Component {
  state = {
    isLoading : true,
    moments : []
  }

  componentDidMount(){
  const API_URL ='https://events-serv.herokuapp.com/api/v1/events';
  fetch(API_URL)
  .then(res => res.json())
  .then(moments => {
    console.log(moments)
    console.log(moments[1].image)
    setTimeout(() => {
      this.setState({
        moments,
        isLoading:false
      })
    },1000)
  });
}


  render() {

    return (
      <div >   

        <h1>Events here</h1>
          <div className="row">
        {this.state.isLoading ?  <h1>Loading page  here</h1> : this.state.moments.map(moment => (
          <div className="card col-4" key={moment.title}>
          <div className="card" key={moment.title}>
            <img className="card-img-top" src="https://preview.redd.it/3iexowfw7lq11.jpg?auto=webp&s=f0b0d3efdb105d3205ee9ba76d6f25fe4ebf28cc" alt='img'/>
            
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
