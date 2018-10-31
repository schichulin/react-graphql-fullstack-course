import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <i>Header</i>
      <div className="bar">
        <a href="">Sick Fits</a>
        <Nav />
      </div>
      <div className="sub-bar">
        <i>Search</i>
      </div>
    </header>
  );
};

export default Header;