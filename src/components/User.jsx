import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location} </h3>
      <h2>Contact: 03211052885</h2>
    </div>
  );
};

export default User;
