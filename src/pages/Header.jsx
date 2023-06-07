import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Super Car List</h1>
      <nav>
        <Link to="/carssection">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
