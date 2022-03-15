import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../App.css"
import {
    MDBContainer,
    MDBNavbar,

    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light>
            <MDBContainer>
                <Link className="navbar-brand" style={{ color: "lightcoral" }} to='/'>Awe):<span style={{ color: "#00e8e8" }}>some</span></Link>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <div className='ms-auto'></div>
                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='d-flex justify-content-center align_item-center ms-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" aria-current='page' to='/'>
                                Home
                            </NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" to='about'>About</NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" to='trips'>Trips</NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <NavLink className="nav-link" to='contact'>Contact</NavLink>
                        </MDBNavbarItem>



                    </MDBNavbarNav>


                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
