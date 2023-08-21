import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Child Constructor");
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(this.props.name + " Component Did Mount");
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log(this.props.name + " render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h2>Contact: 03211052885</h2>
      </div>
    );
  }
}

export default UserClass;
