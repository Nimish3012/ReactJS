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
            <li>Home</li>
            <li>
              <a
                href="https://www.linkedin.com/in/nimish-sahu-a611a1224/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Contact
              </a>

            </li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;
  //because it  is header .js so it should default export header