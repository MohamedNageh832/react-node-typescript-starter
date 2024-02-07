import { APP_ROUTES } from "@/constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClassName = ` text-blue-600`;

  return (
    <header className="flex justify-between py-3 px-4 border-b">
      <span className="text-xl">
        <span className="text-blue-600 font-bold">Chat</span> app
      </span>
      <ul className="flex gap-3">
        <li className="text-md">
          <NavLink
            to={APP_ROUTES.get.HOME}
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-md">
          <NavLink
            to={APP_ROUTES.get.CHAT_ROOMS}
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Chat rooms
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
