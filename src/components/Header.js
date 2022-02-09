/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../store/theme/themeAction";

/* Theme */
import DarkModeToggle from "react-dark-mode-toggle";

/* Images */
import reactLogo from "../assets/react-logo.png";
import reduxLogo from "../assets/redux-logo.png";

export default function Header() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    theme === "light"
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));
  };

  return (
    <nav className="flex border-b-2 rounded px-2 py-2.5 mb-5">
      <img
        className="object-cover h-10 w-fit"
        src={reactLogo}
        alt="React logo"
      />
      <img
        className="object-cover h-10 w-fit mx-4"
        src={reduxLogo}
        alt="Redux logo"
      />
      <span className="self-center text-lg font-semibold ">
        React - Redux - Thunk
      </span>
    </nav>

    // <DarkModeToggle
    //   onChange={toggleTheme}
    //   checked={theme === 'light' ? false : true}
    //   speed={2.5}
    //   size={50}
    // />
  );
}
