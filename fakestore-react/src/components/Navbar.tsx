import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-6 p-4 border-b mb-6">
      <Link
        to="/"
        className="font-semibold hover:underline"
      >
        Inicio
      </Link>

      <Link
        to="/entities"
        className="font-semibold hover:underline"
      >
        Entities
      </Link>
    </nav>
  );
}

export default Navbar;