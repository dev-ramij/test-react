import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./screens/movieList/movieList.screen";
import WelcomeScreen from "./screens/welcome/welcome.screen";

export default function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/list" element={<MovieList/>}/>
                <Route path="/" element={<WelcomeScreen/>} />
            </Routes>
        </BrowserRouter>
    )
}