    import React from 'react';
    import ErrorImage from "../../assest/img/404-error-template.png";
    import { Link } from "react-router-dom";

    const NoPage = () => {
    return (
        <div style={{display: "flex", flex: "100", flexWrap: "wrap"}}>
            <div align="center" style={{flex: "inherit"}}>
                <img src={ErrorImage} alt="Ryng Logo"  align="center" style={{height: "50vh"}}/>
            </div>
            <div align="center" style={{width : "100%"}}>
                <p className="title">Oh no!!</p>
                <p className="subtitle">
                    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
                </p>
                <div align="center">
                    <button className="mb-1">
                        <Link to="/home">Back to Home page without Page Refresh</Link>
                    </button>
                </div>
                <div align="center">
                    <button>
                        <a className="btn-back" href="/home">Back to Home page with Page refresh</a>
                    </button>
                </div>
                
            </div>
        </div>
    )
    }

    export default NoPage