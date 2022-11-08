import { Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <nav className="hidden lg:flex list-none">
      <li>
        <Link to="/" className="text-white px-4 py-2">
          Meus favoritos
        </Link>
      </li>
      <li>
        <Link to="/signin" className="text-white px-4 py-2">
          Sign In
        </Link>
      </li>
      <li>
        <Link to="/signup" className="text-white px-4 py-2">
          Sign Up
        </Link>
      </li>
    </nav>
  );
};
