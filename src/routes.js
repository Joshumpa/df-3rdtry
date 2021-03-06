import MolderA04 from './pages/MolderA04'
import MolderA10 from './pages/MolderA10'
import Main from './pages/Main'
import SparkInfo from './pages/SparkInfo'
import Data from './Components/Data'
import NotFound from './pages/404'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { path: "/", exact: true, Component: Main },
    { path: "/MolderA04", Component: MolderA04 },
    { path: "/MolderA10", Component: MolderA10 },
    { path: "/info", Component: SparkInfo },
    { path: "/Data", Component: Data },
    { Component: NotFound }
];