import React, { useState } from "react";
import { updateCallStatus } from "../../features/user/UserSlice";
import { increment, reset } from "../../features/counter/CounterSlice";
import { useDispatch, useSelector } from "react-redux";


const RightSideBar = () => {
	const [userCallStatus, setUserCallStatus] = useState(
		parseInt(localStorage.getItem("userCallStatus") ?? 0)
	);
	const [count, setCount] = useState(
		parseInt(localStorage.getItem("count") ?? 0)
	);
	
	
	const dispatch = useDispatch();
	const clearScheduledDate = () => {};

	const handleCallButton = () => {
		if (userCallStatus === 0) {
			setUserCallStatus(1);
			dispatch(updateCallStatus(1));
			dispatch(increment());
			setCount(count+1);			
		} else {
			setUserCallStatus(0);
			dispatch(updateCallStatus(0));
		}
		
		if(count >= 5){
			setCount(0);
			dispatch(reset());
		}
	};

	return (
		<div>
			<p>RightSideBar</p>
			<button onClick={handleCallButton}>
				{userCallStatus === 0 ? "Start" : "End"} Call{" "}
			</button>

			<div className="modal" id="callModal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title" style={{ fontSize: "25px" }}>
								Call Initiated: Customer <span id="customer-id"></span>
							</h4>
						</div>

						<div className="modal-body">
							<div className="row">
								<div className="col-sm-6">
									<div
										className="p-2 bg-white mb-2"
										style={{ border: "1px solid #eee" }}
									>
										<h4>
											Initiating call in : <span id="count-down"></span>
										</h4>
										<h4>Status:</h4>
										<span id="call-updated-status"></span>
									</div>
									<div id="custom-fields-container">
										<table className="custom-fields" id="custom-fields"></table>
									</div>
									<br />
									<div className="p-2 bg-white">
										<h4 className="text-dark">Custom Dials</h4>
										<div id="custom-dials"></div>
									</div>
									<br />
								</div>

								<div className="col-sm-6">
									<div className="form-group">
										<label htmlFor="sel1">Select list:</label>
										<select className="form-control" id="disp-sel"></select>
									</div>
									<div className="form-group">
										<label htmlFor="comment">Notes:</label>
										<textarea
											style={{
												color: "#333",
												border: "1px solid rgba(29, 37, 59, 0.5)",
												borderRadius: "10px",
											}}
											className="form-control"
											rows="10"
											id="noteArea"
										></textarea>
									</div>
									<div className="form-group">
										<label htmlFor="callback">Schedule Callback:</label>
										<br />
										<input
											style={{
												color: "#333",
												border: "1px solid rgba(29, 37, 59, 0.5)",
												borderRadius: "10px",
											}}
											className="p-2 w-100"
											type="text"
											id="datepicker"
										/>
										<br />
										<button
											onClick={() => clearScheduledDate()}
											className="btn btn-sm w-100 btn-warning"
										>
											Clear Scheduled Date
										</button>
									</div>
									<br />
									<div className="form-group text-right">
										<strong style={{ fontSize: "13px" }}>Next Call:</strong>
										<div id="next-call-custom-container">
											<table
												className="text-right ml-auto"
												id="next-call-custom"
											></table>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div id="modal-footer" className="modal-footer"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightSideBar;
