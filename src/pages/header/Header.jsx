import React, { useState, useEffect } from "react";
import logo from "../../assest/img/logo.png";
import Navbar from "../navbar/Navbar";
import { FaSun, FaMoon } from "react-icons/fa";
import { updateTheme, updateAvailability } from "../../features/user/UserSlice";
import { useDispatch } from "react-redux";

const Header = () => {
	const [userMode, setUserMode] = useState(
		localStorage.getItem("userMode") ?? "white-content"
	);
	const [userAvailiabilty, setUserAvailiabilty] = useState(
		parseInt(localStorage.getItem("userAvailiabilty")) ?? parseInt(0)
	);

	const dispatch = useDispatch();

	const handleThemeMode = () => {
		if (userMode === "white-content") {
			setUserMode("");
			dispatch(updateTheme(""));
		} else {
			setUserMode("white-content");
			dispatch(updateTheme("white-content"));
		}
	};

	const onAgentToggle = () => {
		if (userAvailiabilty === 0) {
			setUserAvailiabilty(1);
			dispatch(updateAvailability(1));
		} else {
			setUserAvailiabilty(0);
			dispatch(updateAvailability(0));
		}
	};

	useEffect(() => {
		console.log("useEffect");
	}, []);

	return (
		<div style={{ display: "flex", flex: "100", height: "5vh" }}>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					alignContent: "space-around",
				}}
			>
				<img
					src={logo}
					alt="Ryng Logo"
					style={{ width: "40px", margin: "10px" }}
				/>
			</div>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-between",
					alignContent: "space-around",
				}}
			>
				<Navbar />
			</div>
			<div>
				<button type="button" onClick={() => handleThemeMode()}>
					{userMode === "white-content" ? <FaMoon /> : <FaSun />}
				</button>
			</div>

			<div>
				<div className="custom-control custom-switch">
					<input
						onChange={() => onAgentToggle()}
						type="checkbox"
						className="custom-control-input"
						id="customSwitches"
						checked={userAvailiabilty === 1 ? true : false}
					/>

					<label
						style={{ margin: "0px 20px 0px 40px", paddingTop: "0px" }}
						className="custom-control-label opensans-sm-bold"
						htmlFor="customSwitches"
					></label>

					{userAvailiabilty === 1 ? (
						<span id="toggle-button" className="toggle-status-active">
							Active
						</span>
					) : (
						<span id="toggle-button" className="toggle-status-inactive">
							Inactive
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
