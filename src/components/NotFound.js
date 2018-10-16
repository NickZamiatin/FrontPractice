 import React, { Component } from 'react'

export class NotFound extends Component {
  render() {
    return (
      <div>
        <div class="alert alert-dismissible alert-warning">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="/" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
        </div>
      </div>
    )
  }
}

export default NotFound

