const heading = React.createElement("h1",{id:"heading"},"Hellow World by REACT!");
console.log(heading);

//div parent and child

const parent =React.createElement("div",{id:"parent"},[
    React.createElement("div", {id:"child"},
        [React.createElement("h1",{},"This is H1"),
            React.createElement("h1",{},"This is H2")]),
        React.createElement("div", {id:"child"},
            [React.createElement("h1",{},"This is H1"),
                React.createElement("h1",{},"This is H2")])
        
        ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
