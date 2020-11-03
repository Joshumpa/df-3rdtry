import Graphics from "./Components/Graphics";
import Main from "./Components/Main";
import Data from "./Components/Data";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { path: "/", exact: true, Component: Graphics },
    { path: "/Main", Component: Main },
    { path: "/Data", Component: Data }
];