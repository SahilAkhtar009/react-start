// const heading = document.createElement("h1");
// heading.textContent = "Hello, React!";
// document.getElementById("root").appendChild(heading);

// By creating with react component
// const heading = React.createElement(
//   "h1",
//   { class: "heading" },
//   "this is created with react components !"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Nested html elements

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// Nested elements sibling tag the child

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am h1 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
