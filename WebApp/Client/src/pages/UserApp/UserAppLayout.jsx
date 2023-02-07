import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import "./UserAppLayout.scss";
import SideBar from "@/components/SideBar/SideBar";

<<<<<<< HEAD
function UserAppLayout(){
    return(
        <>
            {/* <SideBar />  */}
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
=======
function UserAppLayout() {
	return (
		<div className="user_app">
			<SideBar />
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	);
>>>>>>> 3f717b0 ([ADD] feat(courses): Adding side bar + courses page)
}

export default UserAppLayout;
