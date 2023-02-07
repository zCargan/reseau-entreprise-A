import "./App.scss"

import {Route, Routes} from "react-router-dom";
import {lazy} from "react"

//------------------------------APP LAYOUT-----------------
import WebsiteLayout from "../pages/Website/WebsiteLayout";

import UserAppLayout from "../pages/UserApp/UserAppLayout";
import NoPages from "../components/NoPages/NoPages";


//-----------------------------WEBSITE PAGES---------------
import Home from "../pages/Website/Home/Home";

const Login = lazy(()=>import("../pages/Website/Login/Login"));


//--------------------------USER APP PAGES-----------------
const Search = lazy(()=>import("../pages/UserApp/Search/Search"));
const MyCourses = lazy(()=>import("../pages/UserApp/MyCourses/MyCourses"));

function App() {
    return(
        <>
            <Routes>
                <Route path="/website" element={<WebsiteLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="/" element={<UserAppLayout />}>
                    <Route index element={<MyCourses />} />
                    <Route path="search" element={<Search />} />
                </Route>
                <Route path="*" element={<NoPages />} />
            </Routes>
        </>
    )
}

export default App;