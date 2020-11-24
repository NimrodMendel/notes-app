import React from "react";
import "./Title.css";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className="title mt-5">Your Notes:</h1>;
  }
}
export default Title;
