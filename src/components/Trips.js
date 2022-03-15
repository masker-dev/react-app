import React from "react";
import "../css/trips.css"
import {
  MDBBtn,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,

  MDBRipple,

} from 'mdb-react-ui-kit'

export default function Trips() {
  return (
    <>
      <div className="trips">
        <div className="addvertise">
          <p><span> Discount 50%</span> for sudaness Peaple </p>
        </div>
        <div className="background">
          <div className="title">
            <h1>Nature Vacations</h1>
          </div>
        </div>
      </div>

      <div className="articles">
        <div className="container">
          <p className="bold">55 ARTICLES</p>
          <section className="btns">
            <MDBBtn outline rounded color='dark'>
              USA
            </MDBBtn>
            <MDBBtn outline rounded color='dark'>
              NOrth America
            </MDBBtn>
            <MDBBtn outline rounded color='dark'>
              SouthWest
            </MDBBtn>
            <MDBBtn outline rounded color='dark'>
              California
            </MDBBtn>
            <MDBBtn outline rounded color='dark'>
              Northwest
            </MDBBtn>
            <MDBBtn outline rounded color='dark'>
              Northeast
            </MDBBtn>
          </section>


          <MDBRow className="mb-5">
            <MDBCard className=" col-sm-1 col-md-6 col-lg-4" style={{ maxWidth: '22rem' }}>
              <MDBRipple style={{ height: "260px !important" }} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="p-0">
                <span style={{ fontSize: "15px", color: "#ccc" }}><small>USA</small></span>
                <MDBCardTitle className='text-dark'><small>

                  Midwest: 7 Surprisingly Rugged National Parks and Lakeshores
                </small></MDBCardTitle>

              </MDBCardBody>
            </MDBCard>

            <MDBCard className="col-sm-1 col-md-6 col-lg-4" style={{ maxWidth: '22rem' }}>
              <MDBRipple style={{ height: "260px !important" }} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="p-0">
                <span style={{ fontSize: "15px", color: "#ccc" }}><small>USA</small></span>
                <MDBCardTitle className='text-dark'><small>

                  Midwest: 7 Surprisingly Rugged National Parks and Lakeshores
                </small></MDBCardTitle>

              </MDBCardBody>
            </MDBCard>

            <MDBCard className="col-sm-1 col-md-6 col-lg-4" style={{ maxWidth: '22rem' }}>
              <MDBRipple style={{ height: "260px !important" }} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="p-0">
                <span style={{ fontSize: "15px", color: "#ccc" }}><small>USA</small></span>
                <MDBCardTitle className='text-dark'><small>

                  Midwest: 7 Surprisingly Rugged National Parks and Lakeshores
                </small></MDBCardTitle>

              </MDBCardBody>
            </MDBCard>

            <MDBCard className="col-sm-1 col-md-6 col-lg-4" style={{ maxWidth: '22rem' }}>
              <MDBRipple style={{ height: "260px !important" }} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="p-0">
                <span style={{ fontSize: "15px", color: "#ccc" }}><small>USA</small></span>
                <MDBCardTitle className='text-dark'><small>

                  Midwest: 7 Surprisingly Rugged National Parks and Lakeshores
                </small></MDBCardTitle>

              </MDBCardBody>
            </MDBCard>

          </MDBRow>
        </div>
      </div>
    </>
  )
}
