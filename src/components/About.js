import React from "react";
import nature from "../images/nature.mp4"
import {
  MDBRow,
  MDBContainer,


} from "mdb-react-ui-kit"

function About() {
  return (
    <div className="about pb-5">
      <MDBContainer>
        <MDBRow>
          <div className="col-lg-6">
            <div className="mession mt-5">
              <h5>Our Gools</h5>
              <p><small>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

              </small></p>
            </div>
            <div className="vession mt-5">
              <h5>visualization</h5>
              <p>
                <small>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </small>
              </p>

            </div>
          </div>
          <div className="mp4 mt-lg-5 lg-ps-5 lg-pt-5  col-lg-6">

          <div className="ratio ratio-16x9">
             <iframe
               src={nature}
               title="YouTube video"
               allowfullscreen
             ></iframe>
         </div>
          </div>
        </MDBRow>
      </MDBContainer>


    </div>
  )
}
export default About
