
/**
 * <div id= "parent">
 *      <div id= "child">
 *      <h1> HEllo Sumit</h1>
 *      </div>
 * </div>
 * 
 * <div id= "parent">
 *      <div id= "child2">
 *      <h1> HEllo Sumit</h1>
 *      </div>
 * </div>
 **/
const parent= React.createElement("div", {id:"parent"}, [
  React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "I like sumit"),

  ]),

  React.createElement("div", {id: "child2"}, [
    React.createElement("h3", {}, "sumit is awesome"),

  ]),

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

