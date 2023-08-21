import User from "./User";
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <>
        <div>
          <h1>About Page</h1>
          <h2>This is react course routing page</h2>
        </div>
        <UserClass name={"child 1"} />
        <UserClass name={"child 2"} />
      </>
    );
  }
}

export default About;
