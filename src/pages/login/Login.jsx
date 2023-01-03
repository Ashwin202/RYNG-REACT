import React, { useState } from "react";
import "./Login.css";
import "../../css/blackdashboard.css";
import "../../css/demo.css";
import logo from "../../../src/assest/img/ryng8_red.png";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";

// const agents = [
// 	{
// 		username: "nithin@askerbot.com",
// 		password: "enterthedragon",
// 	},
// 	{
// 		username: "admin2",
// 		password: "012345678",
// 	},
// ];
// const admins = [
// 	{
// 		username: "ashok@askerbot.com",
// 		password: "enterthedragon",
// 	},
// 	{
// 		username: "admin2",
// 		password: "012345678",
// 	},
// ];

const Home = () => {
	const [activeTab, setActiveTab] = useState("agent-tab");
	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	});

	const agentAdminTabHandleClick = (event) => {
		if (event.target.id === "agent-tab") setActiveTab("agent-tab");
		else setActiveTab("admin-tab");
	};

	const changeHandler = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	// const checkUser = (activeTab) => {
	// 	let usercheck = "";
	// 	if (activeTab === "admin-tab") {
	// 		usercheck = admins.find(
	// 			(admins) =>
	// 				admins.username === loginData.username &&
	// 				admins.password === loginData.password
	// 		);
	// 	} else {
	// 		console.log("agent");
	// 		usercheck = agents.find(
	// 			(agents) =>
	// 				agents.username === loginData.username &&
	// 				agents.password === loginData.password
	// 		);
	// 	}

	// 	if (usercheck) {
	// 		console.log("Login successful");
	// 	} else {
	// 		console.log("Wrong password or username");
	// 	}
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		// checkUser(activeTab);
		const url = process.env.REACT_APP_SERVER_URL;
		const data = JSON.stringify({
			username: loginData.username,
			password: loginData.password,
			userType: activeTab === "agent-tab" ? "agent" : "admin",
		});

		console.log(data);
		const response = await axios.post(`${url}/api/login`, data, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log({ response });

		if (!response.data.error) {
			console.log("Login successful");
			window.open(`${url}/dashboard`, "_blank");
		} else {
			console.log("Wrong password or username");
		}
	};

	return (
		<div className="App">
			<div className="content">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className=" col-12 mt-5">
								<img src={logo} alt="chat box user" className="loginImg" />
								<span
									className="opensans-lg-bold "
									style={{ position: "absolute", bottom: "0px" }}
								>
									{" "}
									REACT
								</span>
							</div>
						</div>
						<div
							id="login-box"
							className="card mx-auto mt-5"
							style={{
								boxShadow: "0 0px 15px 4px rgba(0, 0, 0, 0.25)",
								width: "30vw",
								background: "white",
							}}
						>
							<ul id="login-tab" className="nav nav-pills nav-fill">
								<li className="nav-item">
									<a
										id="agent-tab"
										className={
											activeTab === "agent-tab" ? "nav-link active" : "nav-link"
										}
										href="javascript:void(0);"
										onClick={(event) => agentAdminTabHandleClick(event)}
									>
										Agent
									</a>
								</li>
								<li className="nav-item">
									<a
										id="admin-tab"
										className={
											activeTab === "admin-tab" ? "nav-link active" : "nav-link"
										}
										href="javascript:void(0);"
										onClick={(event) => agentAdminTabHandleClick(event)}
									>
										Admin
									</a>
								</li>
							</ul>
							<div
								className="card-body px-4 mx-4"
								style={{ padding: "4em 0em" }}
							>
								<form id="login_form" onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-md-12 px-md-1">
											<div className="form-group">
												<label>Username </label>
												<input
													id="username"
													name="username"
													type="text"
													className="form-control"
													value={loginData.username}
													placeholder="Username"
													maxLength={100}
													onChange={changeHandler}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 px-md-1">
											<div className="form-group">
												<label>Password </label>
												<input
													id="password"
													name="password"
													type="password"
													className="form-control"
													value={loginData.password}
													placeholder="Password"
													maxLength={100}
													onChange={changeHandler}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 px-md-1">
											<button
												id="login-button"
												type="submit"
												className="btn w-100"
											>
												Login
											</button>
										</div>
									</div>
								</form>
								<div
									id="forgot-pass"
									className="row"
									style={{ marginTop: "20px" }}
								>
									<div className="col-md-12">
										<a href="/forgot-password">Forgot Password</a>
									</div>
								</div>

								<div id="otp_form" style={{ display: "none" }}>
									<div className="row">
										<div className="col-md-12 px-md-1">
											<div className="form-group">
												<label>Password </label>
												<input
													id="otp_code"
													name="otp_code"
													className="form-control"
													placeholder="Enter OTP"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 px-md-1">
											<p style={{ color: "grey" }}>
												<a id="timer" href="javascript:void(0);"></a>
											</p>
											<a
												id="resend"
												style={{ color: "#f23e46", padding: "1em" }}
												href="javascript:void(0);"
											>
												Resend
											</a>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 px-md-1">
											<button id="verify-button" className="btn w-100">
												Verify
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
