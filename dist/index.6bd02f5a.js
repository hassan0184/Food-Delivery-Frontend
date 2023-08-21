// Creating tag
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from React!");
//Nested Tags
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello from nested tags</h1>
 *      </div>
 * </div>
 */ // ReactElement(object) => HTML(Browser Understands)
// Now lets create it in react
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello from nested tags 1"),
        React.createElement("h2", {}, "Hello from nested tags 2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Hello from nested tags 1"),
        React.createElement("h2", {}, "Hello from nested tags 2")
    ])
]);
// Creating the root for react to render
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the root now
root.render(parent);
console.log(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
