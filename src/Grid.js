import React from 'react';
import Row from './Row';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 1,
      y: 1
    }
  }

  render() {
    return <div>
      <div style={{
        position: "fixed",
        padding: "6px"
      }}>
        <input type="range" value={this.state.x} min={1} max={25}
               onChange={(e)=>this.setState({x: parseInt(e.target.value, 0)})}/>
        <input type="range" value={this.state.y} min={1} max={25}
               onChange={(e)=>this.setState({y: parseInt(e.target.value, 0)})}/>
      </div>
      <div style={{
        display: "inline-block",
        height: this.props.height,
        width: this.props.width
      }}>{
        Array(this.state.y).fill().map((_, i) => <Row
          height={this.props.height / this.state.y}
          width={this.props.width}
          count={this.state.x}
          key={i}/>)
      }</div>
    </div>
  }
}