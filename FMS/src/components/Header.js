import {Link} from "react-router-dom";
const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://penji.co/wp-content/uploads/2022/08/7.-doordash-logo.jpg"
            />
    </a>
);


const Header = () => {
    return (
      <div className="Header">
        <Title/>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Cart</Link></li>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;
  //because it  is header .js so it should default export header