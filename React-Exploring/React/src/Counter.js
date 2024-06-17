import React, { Component } from 'react'
import './Counter.css'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleMouseOver = () => {
        this.setState(prevState => ({
          count: prevState.count + 1
        }));
      };
  render() {
    return (

     <div>
      <label className="sty" style={{textAlign:"center",color:"blueviolet"}} onMouseOver={this.handleMouseOver}>
        Counter APP ({this.state.count})
        </label>
      </div>


    )
  }
}

export default Counter