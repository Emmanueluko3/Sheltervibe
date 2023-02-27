import React from "react";

import Idea from "../assets/images/blackidea.png";
import Mission from "../assets/images/Mission.png";
import Team1 from "../assets/images/team1.jpg";
// import Team2 from "../assets/images/justin.png";
import Team4 from "../assets/images/buhari.jpg";

function AboutUs() {
  const team = [
    {
      img: Team1,
      name: "Brenda",
      occupation: "CEO/Founder",
    },
    {
      img: Team4,
      name: "Mr. Justine",
      occupation: "Real Estate Investor",
    },
    {
      img: Team1,
      name: "Donald Trump",
      occupation: "Real Estate Investor",
    },
    {
      img: Team4,
      name: "Muhammedu Buhari",
      occupation: "Real Estate Investor",
    },
  ];

  const teams = team.map((item, index) => (
    <div
      key={index}
      className="col-lg-3 bg-white border-0 card p-3 justify-content-center align-items-center"
    >
      <img
        src={item.img}
        className="img-fluid img-thumbnail cus-height"
        alt=""
      />
      <h3 className="fs-5 text-success">{item.name}</h3>
      <h6 className="text-secondary-emphasis">{item.occupation}</h6>
    </div>
  ));
  return (
    <>
      <div className="bg-light py-3">
        <div className="container mb-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="fw-bold fs-1 my-4">Who we are</h2>
          <div className="about d-flex flex-column align-items-center justify-content-center">
            <p className="fw-semibold text-secondary-emphasis">
              Welcome to Citadel, your premier destination for all your real
              estate needs. Our website is designed to provide you with an easy
              and efficient way to search for and find your dream home or
              investment property. We understand that buying or selling a
              property can be a complex and daunting process, which is why we
              are committed to providing you with the best possible service and
              support.
            </p>
            <p className="fw-semibold text-secondary-emphasis">
              At Citadel, we believe that the key to a successful real estate
              transaction is communication, and our team of experienced agents
              is here to help you every step of the way. Whether you are a
              first-time homebuyer or a seasoned investor, we have the expertise
              and resources to guide you through the process and ensure that you
              make the most informed decisions.
            </p>

            <p className="fw-semibold text-secondary-emphasis">
              Our website offers a comprehensive database of properties, with
              detailed descriptions, high-quality photos, and virtual tours, so
              you can browse and compare properties from the comfort of your own
              home. You can also search for properties based on your specific
              criteria, such as location, price range, number of bedrooms and
              bathrooms, and more.
            </p>
            <p className="fw-semibold text-secondary-emphasis">
              Thank you for choosing Citadel for your real estate needs. We look
              forward to working with you and helping you find the perfect
              property to call home.
            </p>
            <button className="btn btn-secondary w-25">Get Started</button>
          </div>
        </div>
        <div className="cus-bg-2 row py-3 w-100">
          <div className="col-sm-4 col-lg-4 d-flex flex-column align-items-center justify-content-center text-white">
            <h2 className="fs-1 fw-bold">1032+</h2>
            <h6 className="fs-5 fw-bold">Clients</h6>
          </div>
          <div className="col-sm-4 col-lg-4 d-flex flex-column align-items-center justify-content-center text-white">
            <h2 className="fs-1 fw-bold">106+</h2>
            <h6 className="fs-5 fw-bold">Investors</h6>
          </div>
          <div className="col-sm-4 col-lg-4 d-flex flex-column align-items-center justify-content-center text-white">
            <h2 className="fs-1 fw-bold">1032+</h2>
            <h6 className="fs-5 fw-bold">clients</h6>
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-white py-4">
          <div className="container my-5 py-lg-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 my-3 d-flex align-items-center justify-content-center">
                <div className="card p-5 border-0 bg-light">
                  <img src={Idea} className="img-fluid" alt="Our Vision" />
                </div>
              </div>
              <div className="col-lg-6 my-3">
                <h3 className="fs-1 fw-bold">Our Vision</h3>
                <p className="fw-semibold text-secondary-emphasis">
                  At Citadel, our vision is to be the leading provider of real
                  estate services in the industry. We strive to set the standard
                  for excellence and innovation, and to exceed our clients'
                  expectations in every aspect of their real estate experience.
                </p>
                <div className="btn btn-secondary">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Mission */}
        <div className="bg-light py-lg-4">
          <div className="container my-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 my-3 d-flex align-items-center justify-content-center">
                <div className="card p-5 border-0">
                  <img
                    src={Mission}
                    className="img-fluid h-50"
                    alt="Our Mision"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-first my-3">
                <h3 className="fs-1 fw-bold">Our Mission</h3>
                <p className="fw-semibold text-secondary-emphasis">
                  Our mission at Citadel is to provide our clients with the
                  highest level of service and support throughout their real
                  estate journey. We are committed to helping our clients
                  achieve their goals by providing them with the most accurate
                  and up-to-date information, and by using the latest
                  technologies and tools to enhance their real estate
                  experience.
                </p>
                <div className="btn btn-secondary">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
        {/* Our team */}
        <div className="bg-white py-5">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h2 className="fs-1 fw-bold">Meet our Team</h2>
            <div className="row p-3 justify-content-center align-items-center">
              {teams}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
