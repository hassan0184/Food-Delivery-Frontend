import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is the element"
);

// JSX
/**
-> JSX in NOT html inside javascript
-> Instead its html like syntax
-> HTML-Like OR XML-Like syntax
-> JSX is just a syntax
-> 
*/

const JsxHeading = function () {
  return (
    <h1 className="head" tabIndex="1">
      JSX Heading
    </h1>
  );
};

// React Functional Components
/**
 * -> Its just a javascript function which return some piece of JSX or react element
 * ->
 */

// Component composition
const FunComp = () => (
  <React.Fragment>
    <div id="container">
      <JsxHeading />
      {heading}
      <h1>Rendered in functional component</h1>
    </div>
    <div>
      <h1>Hello Nigga!</h1>
    </div>
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunComp />);
