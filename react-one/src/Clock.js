// import React, { Component } from "react";
// import ReactDOM from "react-dom"

// class Clock extends Component {
//     constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//     console.log('Inside constructor');
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//     console.log('Inside componentDidMount');
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//     console.log('Inside componentWillUnmount');
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
  
//   render() {
//     console.log('Inside render');
//     return (
//       <div>
//         <h1>Hello world!</h1>
//         <h3>It is a {this.state.date.toLocaleTimeString()}</h3>
//       </div>
//     );
//   }
// }

// export default Clock;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);
