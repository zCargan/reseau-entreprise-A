import {Outlet} from "react-router-dom";
import { Suspense } from "react";

import SideBar from "../../components/SideBar/SideBar";

function UserAppLayout(){
    return(
        <>
            <SideBar />
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

export default UserAppLayout;