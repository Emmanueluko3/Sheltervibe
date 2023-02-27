import React from "react";
import "../styles/contactus.css";
import Form from "react-bootstrap/Form";

function ContactUs() {
  return (
    <>
      <div className="contactus-parent">
        <div className="container py-lg-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 card p-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum.
              </p>
              <Form>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6 my-2 ">
                    <input
                      type="text"
                      className="form-control py-3"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-lg-6 my-2">
                    <input
                      type="text"
                      className="form-control py-3"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="my-2">
                  <input
                    type="email"
                    className="form-control py-3"
                    placeholder="Email"
                  />
                </div>

                <Form.Group
                  className="my-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your message here"
                    rows={3}
                    className="h-75"
                  />
                </Form.Group>

                <div className="my-3">
                  <Form.Check
                    type={"checkbox"}
                    id={"Check"}
                    label={"Do you agree to our terms and services?"}
                  />
                </div>

                <div className="w-100">
                  <button className="btn btn-secondary w-100 py-3">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
            <div className="col-lg-4">
              <div className="card p-2 m-3">
                <h4 className="fw-bold">For inquiries contact</h4>
                <div className="px-1">
                  <h6>Brenda</h6>
                  <p>
                    No.16 Uqua RD. Eket,
                    <br /> Akwa Ibom State, <br /> Nigeria
                  </p>
                </div>
                <div className="px-1">
                  <h6>Brenda</h6>
                  <p>
                    No.16 Uqua RD. Eket,
                    <br /> Akwa Ibom State, <br /> Nigeria
                  </p>
                </div>
              </div>
              <div className="card p-2 m-3">
                <h4 className="fw-bold">Corporate Headquarters </h4>
                <div className="px-1">
                  <h6>Akwa Ibom State University</h6>
                  <p>
                    532111, Ikot Akpaden,
                    <br /> Akwa Ibom State, <br /> Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
