import {Outlet} from "react-router-dom";
import { Suspense } from "react";

import Navbar from "../../components/NavBar/NavBar";
import FooterBar from "../../components/FooterBar/FooterBar";

function WebsiteLayout(){
    return(
        <>
            {/* <Navbar /> */}
            <Suspense>
                <Outlet />
            </Suspense>
            <FooterBar />
        </>
    )
}

export default WebsiteLayout;