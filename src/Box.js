import React  from 'react';

const randomColor = function () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export default class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      color: randomColor()
    }
  }

  render() {
    return <div style={{
      display: "inline-block",
      background: this.state.color,
      height: this.props.height,
      width: this.props.width,
    }} onMouseOver={()=> this.setState({color: randomColor()})}/>;
  }
}