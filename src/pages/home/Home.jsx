import React from "react";
import SmallCards from "../../components/SmallCards";
import CallPanel from "../../components/CallPanel";
import {useSelector} from 'react-redux';



const Home = () => {
    const availability =  useSelector((store) => store.user.availability);
    const callWindow =  useSelector((store) => store.user.callStatus);
    const userName =  useSelector((store) => store.user.userName);

	const myHour = new Date().getHours();
	let greet = "Hi";

	if (myHour < 12)
		greet = 'Good Morning';
	else if (myHour >= 12 && myHour <= 17)
		greet = 'Good Afternoon';
	else if (myHour >= 17 && myHour <= 24)
		greet = 'Good Evening';

	
	return (		
		<>		
			<div className="pl-2 pr-2"> 
				<p className="opensans-lg-bold mt-3"> {greet} {userName} !</p>
				{callWindow === 0 && (
					<div className="d-flex" style= {{flex:"100"}}>
						<div className="d-flex" style= {{flex:"60"}}>
							<SmallCards/>
							<SmallCards/>
							<SmallCards/>
							<SmallCards/>
						</div>	
						<div className="d-flex" style= {{flex:"40"}}></div>
					</div>
				)}
			</div>
			
			<div className="d-flex" style= {{flex:"100", height:"90%"}}>				
				{availability === 2 && (
					<div id="call-info-wrapper"  className="card round-border">
						<div id="call-info-component" className="row h-100" style={{padding:"0px", margin:"0px"}}>
							<p>call-info-component</p>
						</div>
					</div>
				)}
				{availability === 1 && callWindow === 0 && (
					<div id="call-waiting-wrapper" className='col-lg-8 col-md-10 col-sm-12 ml-auto mr-auto'>
						<div className="col-lg-12 opensans-xl-bold text-center" style={{marginTop:"150px"}}>
						Waiting for next call...</div>
						<div className="col-lg-12 opensans text-center" style={{marginTop:"30px"}}>
						The progressive dialer will assign a call to you as soon as it is available.
						Please do not navigate away from this page in order to ensure uninterrupted service.
						</div>
					</div>
				)}
				{availability === 1 && callWindow === 1 && (
					<div id="call-window-wrapper" className="row h-100 ml-1 mr-1" style={{padding:"0px", margin:"0px!important"}}>
						{/* <div className="col-lg-12 opensans-xl-bold text-center" style={{marginTop:"150px"}}>
						On Call...</div>
						<div className="col-lg-12 opensans text-center" style={{marginTop:"30px"}}>
						The progressive dialer has assigned a call.
						</div> */}

						<CallPanel/>
					
	
					</div>
				)}
				
				{availability === 0 && (
					<div id="call-offline-wrapper" className='col-lg-8 col-md-10 col-sm-12 ml-auto mr-auto'>
						<div className="col-lg-12 opensans-xl-bold text-center" style={{marginTop:"150px"}}>
						Hey champ, be active. The world needs you!
						</div>
						<div className="col-lg-12 opensans text-center" style={{marginTop:"30px"}}>Toggle your self ON.
						Customers are awaiting your expert opinion!
						</div>
					</div>
				)}
			</div> 
			
		</>
	);
};

export default Home;
