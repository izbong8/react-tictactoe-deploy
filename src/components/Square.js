import React from "react";
import "./Square.css"

// export default class Square extends React.Component 
const Square = ({onClick, value}) => {
  // render() {
    return (
      <button className="square"
          onClick={ /* this.props. */onClick} >
          {/* this.props. */value}    
      </button>
    )
  // }
}

export default Square;