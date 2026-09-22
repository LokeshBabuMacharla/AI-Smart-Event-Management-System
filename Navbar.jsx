import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Smart Events
        </h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/login" className="hover:text-yellow-300">
            Login
          </Link>

          <Link to="/register" className="hover:text-yellow-300">
            Register
          </Link>

          <Link to="/dashboard" className="hover:text-yellow-300">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;