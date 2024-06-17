import React, { Component } from 'react'

export class Wishing extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName:'sanjay'
      }
    }
    ChangeName(event){
        this.setState({
            firstName:event.target.value
        })
    }
  render() {
    return (
      <div style={{color:"green"}}>Wishing {this.state.firstName}</div>
    
    )
  }
}


export default Wishing