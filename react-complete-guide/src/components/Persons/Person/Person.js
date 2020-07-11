// import React, { Component, Fragment } from "react";
import AuxClass from "../../../hoc/AuxClass";
import React, { Component } from "react";
// import withClass from "../../../hoc/WithClass";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <AuxClass classes={classes.Person}>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </AuxClass>
    );
  }
}

export default Person;

// class Person extends Component {
//   render() {
//     console.log("[Person.js] rendering...");
//     return (
//       <div className={classes.Person}>
//         <p onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p>{this.props.children}</p>
//         <input
//           type="text"
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//       </div>
//     );
//   }
// }

// class Person extends Component {
//   render() {
//     console.log("[Person.js] rendering...");
//     return [
//       <p key="i1" onClick={this.props.click}>
//         I'm {this.props.name} and I am {this.props.age} years old!
//       </p>,
//       <p key="i2">{this.props.children}</p>,
//       <input
//         key="i3"
//         type="text"
//         onChange={this.props.changed}
//         value={this.props.name}
//       />,
//     ];
//   }
// }

// class Person extends Component {
//   render() {
//     console.log("[Person.js] rendering...");
//     return (
//       <Aux>
//         <p key="i1" onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p key="i2">{this.props.children}</p>
//         <input
//           key="i3"
//           type="text"
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//       </Aux>
//     );
//   }
// }

// class Person extends Component {
//   render() {
//     console.log("[Person.js] rendering...");
//     return (
//       <Fragment>
//         <p key="i1" onClick={this.props.click}>
//           I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p key="i2">{this.props.children}</p>
//         <input
//           key="i3"
//           type="text"
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//       </Fragment>
//     );
//   }
// }
