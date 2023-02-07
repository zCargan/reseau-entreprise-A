import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import "./UserAppLayout.scss";
import SideBar from "@/components/SideBar/SideBar";

function UserAppLayout() {
	return (
		<div className="user_app">
			<SideBar />
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	);
}

export default UserAppLayout;
