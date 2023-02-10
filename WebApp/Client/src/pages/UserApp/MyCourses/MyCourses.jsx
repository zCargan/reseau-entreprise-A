import "./MyCourses.scss";
import ProfilePic from "@/assets/image/popo.png";
import { useEffect, useState } from "react";
import Formation from "@/components/Formation/Formation.jsx";
import { getDataFormation } from "../../../action/formationAction";
import { connect } from "react-redux";

function MyCourses(props) {
	const [name, setName] = useState("Aymar");
	const [secondName, setSecondName] = useState("Hakizimana");
	// const [formations, setFormations] = useState([]);

	console.log(props.formations);
	// useEffect(() => {
	// 	async function test() {
	// 		setFormations(await props.getFormations());
	// 	}
	// 	test();
	// }, []);
	return (
		<div className="main_tab">
			<div className="tab_title">
				<div className="tab_title_background"></div>
				<h1>My courses</h1>
			</div>
			<div className="container">
				<div className="profile">
					<img
						src={ProfilePic}
						alt="Profile picture"
						className="profile_pic"
					/>

					<div className="profile_info">
						<h2 className="profile_info_title">
							Profile informations:
						</h2>
						<p>
							Name: <b>{name}</b>
						</p>
						<p>
							Second name: <b>{secondName}</b>
						</p>
					</div>
				</div>
				<div className="formation_list">
					<h2 className="formation_list_title">Followed courses:</h2>
					<div className="formation_list_container">
						{props.formations
							? props.formations.map((x) => {
									return (
										<Formation
											key={x.id}
											theme={x.ThemeId}
											title={x.description}
											price={x.price}
										/>
									);
							  })
							: ""}
					</div>
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		formations: state.formationState.formations,
	};
};

const mapStateToDispatch = (dispatch) => {
	return {
		getFormations: () => dispatch(getDataFormation()),
	};
};

const connector = connect(mapStateToProps, mapStateToDispatch);

export default connector(MyCourses);
