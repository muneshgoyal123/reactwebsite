import React from "react";
import { NavLink } from "react-router-dom";
const Nabbar = () => {

    return (<>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">


                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <NavLink to="/" className="navbar-brand">Java Tutorial</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link active" aria-current="page" style={({ isActive }) => ({
                                            fontWeight: isActive ? 'bold' : 'normal', borderBottom: isActive ? '1px solid #565387' : 'none'
                                        })}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" className="nav-link" style={({ isActive }) => ({
                                            fontWeight: isActive ? 'bold' : 'normal', borderBottom: isActive ? '1px solid #565387' : 'none'
                                        })}>AboutUs</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/services" className="nav-link" style={({ isActive }) => ({
                                            fontWeight: isActive ? 'bold' : 'normal', borderBottom: isActive ? '1px solid #565387' : 'none'
                                        })}>Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact" className="nav-link" style={({ isActive }) => ({
                                            fontWeight: isActive ? 'bold' : 'normal', borderBottom: isActive ? '1px solid #565387' : 'none'
                                        })}>ContactUs</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>)

}
export default Nabbar;
