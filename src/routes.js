import Erro from "Pages/Erro"
import Favorites from "Pages/Favorites"
import Home from "Pages/Home"
import PageBase from "Pages/PageBase"
import Player from "Pages/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
    return (
        <BrowserRouter>
               <Routes>
                    <Route path="/" element={<PageBase />}>
                        <Route index element={<Home />}></Route>
                        <Route path="favoritos" element={<Favorites />}></Route>
                        <Route path=":id" element={<Player />}></Route>
                        <Route path="*" element={<Erro />}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes