import {Outlet} from "react-router-dom";
import { Suspense } from "react";

import Navbar from "../../components/NavBar/NavBar";

function WebsiteLayout(){
    return(
        <>
            <Navbar />
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

export default WebsiteLayout;