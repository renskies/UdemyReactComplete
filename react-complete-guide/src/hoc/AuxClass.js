import React from "react";

const auxClass = (props) => (
  <div className={props.classes}>{props.children}</div>
);

// const auxClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent />
//     </div>
//   );
// };

export default auxClass;
