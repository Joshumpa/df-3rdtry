import Graphics from "./pages/GraphicsContainer"
import Main from "./Components/Main"
import Data from "./Components/Data"
import NotFound from './pages/404'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { path: "/", exact: true, Component: Main },
    { path: "/Graphics", Component: Graphics },
    { path: "/Data", Component: Data },
    { Component: NotFound }
];