import "./scss/Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="d-flex">
        <div className="col-3">
          <p>Valerio</p>
        </div>
        <div className="col-9 menu">
          <p>
            <a href="#">Projects</a>
          </p>
          <p>
            <a href="#">Skill</a>
          </p>
          <p>
            <a href="#">About</a>
          </p>
          <p>
            <a href="#">Home</a>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
