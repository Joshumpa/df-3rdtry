import Graphics from "./pages/GraphicsContainer"
import Main from "./Components/Main"
import Data from "./Components/Data"
import NotFound from './pages/404'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { path: "/", exact: true, Component: Graphics },
    { path: "/Main", Component: Main },
    { path: "/Data", Component: Data },
    { Component: NotFound }
];