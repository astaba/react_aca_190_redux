import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

import { authSliceActions } from "../slices/auth/authSlice";

const Header = () => {
  const isAuthenticated = useSelector(
    (state) => state.authState.isAuthenticated
  );

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(authSliceActions.logout());

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
