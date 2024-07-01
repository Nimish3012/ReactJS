import React from "react";
import ReactDOM from "react-dom/client";


//react element -> creates an object 
// when element is rendered into the dom -> the it becomes HTML
const Heading = React.createElement("h1",{id:"head"},"This heading is from React");  //react element using core react 
//typical structure : solution : jsx;
console.log(Heading);

//React element using JSX
const JSXHeading = <h1 id="heading">This is H1 from JSX</h1>;    //now this jsx line has become a react element as well
//this is not html in javascript   but it is html similar syntax i.e. JSX

//JSX -> react element -> creates an object 
// when element is rendered into the dom -> the it becomes HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(JSXHeading);

//react element
const Child =() => (
    <h1 >Namaste React from child</h1>
);






//react componenets => functional components 
//name must be capital : convention
const HeadingComponent = () => (
    <div id="heading" >
        
        <h1>This Is A React Functional Componenets</h1> 
        
        <h2>NIMISH</h2>
        <Child/>

        <h2>{100+300}</h2> 
        {} 
        {/* writing JS using {} */}
        {/* component injected to render as it is.  componenet composition*/}
    </div>
);



// So a componenet Title 
// Can be called 

// <Title/>
// <Title></Title>
// {Title()}


root.render(<HeadingComponent/>);
// React.createElement() => Create React Obj => render as HTML Element;
// JSX => React.createElement() => Create React Obj => render as HTML Element;