import AddArtist from "../pages/AddArtist";
import ArtistDetail from "../pages/ArtistDetail";
import Artists from "../pages/Artists";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";


export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/artists',
                element: <Artists/>
            },
            {
                path: '/artists/:id',
                element: <ArtistDetail/>
            },
            {
                path: '/artists/add',
                element: <AddArtist/>
            }
        ]
    }
]