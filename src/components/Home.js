import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,


} from 'mdb-react-ui-kit';

function Featuchers() {
  return (
    <div className="featuchers">
      <MDBContainer>
        <MDBRow className="">
          <MDBCol className="px-2" sm="6" md="4">
            <i className="md-ms-3 fa-regular fa-thumbs-up"></i>
            <div>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
              </p>
            </div>
          </MDBCol>
          <MDBCol className="px-2" sm="6" md="4">
            <i className="fa-regular fa-lightbulb"></i>
            <div>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
              </p>
            </div>
          </MDBCol>
          <MDBCol className="px-2" sm="6" md="4">
            <i className="fa-solid fa-house"></i>
            <div>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
              </p>
            </div>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </div>
  )
}

function Booking() {
  return (
    <div className="booking py-5">
      <MDBContainer>
        <button className="makeWhite">All stays</button>
        <button>Hotel</button>
        <button>Hose / Apartment</button>
        <MDBRow className="ms-0 align-items-center pb-2">

          <MDBCol sm="12" lg="4" className="">
            <MDBInput label='Text input' id='typeText' type='text' />
          </MDBCol>

          <MDBCol sm="12" lg="4" className="ms-0  pt-0 row">
            <MDBCol xs="6" sm="6">

              <div>
                <MDBInput label='Check in' id='typeText' type='date' />
              </div>
            </MDBCol>

            <MDBCol xs="6" sm="6">
              <div>
                <MDBInput label='Check in' id='typeText' type='date' />
              </div>

            </MDBCol>
          </MDBCol>




          <MDBCol sm="12" lg="2" className="d-flex">
            <div className="p-3">
              <i className="fa-solid fa-users"></i>
            </div>
            <div>
              <span className="d-block">
                1 Room
              </span>
              <span className="d-block b">
                4 Guests
              </span>
            </div>
          </MDBCol>

          <MDBCol sm="12" lg="2">
            <button className="search w-100 float-right">Search</button>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </div>
  )
}


function Offers() {
  return (
    <MDBRow className="">
      <MDBCard className="col-sm-6 col-md-4 col-lg-3" style={{ maxWidth: '22rem' }}>
        <MDBRipple style={{ height: "260px !important" }} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody className="p-0">
          <span style={{ fontSize: "15px", color: "#ccc" }}><small>40+  articles</small></span>
          <MDBCardTitle className='text-dark'><small>Embarce the great outdoors</small></MDBCardTitle>
          <MDBCardText>
            <small>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="col-sm-6 col-md-4 col-lg-3" style={{ maxWidth: '22rem' }}>
        <MDBRipple style={{ height: "260px !important" }} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody className="p-0">
          <span style={{ fontSize: "15px", color: "#ccc" }}><small>40+  articles</small></span>
          <MDBCardTitle className='text-dark'><small>Card title</small></MDBCardTitle>
          <MDBCardText>
            <small>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="col-sm-6 col-md-4 col-lg-3" style={{ maxWidth: '22rem' }}>
        <MDBRipple style={{ height: "260px !important" }} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody className="p-0">
          <span style={{ fontSize: "15px", color: "#ccc" }}><small>40+  articles</small></span>
          <MDBCardTitle className='text-dark'><small>Card title</small></MDBCardTitle>
          <MDBCardText>
            <small>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="col-sm-6 col-md-4 col-lg-3" style={{ maxWidth: '22rem' }}>
        <MDBRipple style={{ height: "260px !important" }} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody className="p-0">
          <span style={{ fontSize: "15px", color: "#ccc" }}><small>40+  articles</small></span>
          <MDBCardTitle className='text-dark'><small>Card title</small></MDBCardTitle>
          <MDBCardText>
            <small>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>



    </MDBRow>

  );
}





function Text() {
  return (
    <div className="text">
      <MDBContainer>
        <h6>Need some ideas for your next trip? </h6>
        <small>
          Start planning the trip of your dreams with the help of 1000+ articles on trivago magazine, ranging from the coolest hotels in New York to romantic getaways in Florida and everything in between.
        </small>
        <p className="sm-logo" >Awe):<span style={{ color: "#00e8e8" }}>some</span></p>
        <Offers />
      </MDBContainer>

    </div>
  )
}
// Elevate your next hotel experience!
// function HotelExp(){
//   // <img className="image-responsive" src={niceGif}/>
//   return(
//
//     <MDBRow className="hotelExp">
//     <MDBCol>
//     <div className="gifPic ">
//       <img className="" src={niceGif}/>
//     </div>
//     </MDBCol>
//     <MDBCol>
//     <div className="title ps-lg-5 d-flex justify-content-center align-items-center">
//       <h5>Elevate your next hotel experience!</h5>
//     </div>
//     </MDBCol>
//     </MDBRow>
//
//   )
// }

export default function Home() {
  return (
    <>
      <MDBCarousel showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <Featuchers />
      <Booking />
      <Text />

    </>
  );
}
