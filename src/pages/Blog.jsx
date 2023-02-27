import React from "react";
import "../styles/blog.css";
import Newsimg from "../assets/images/newsimg.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Blog() {
  return (
    <div className="blog-parent py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-last">
            <div className="card p-2 my-2">
              <div className="top">
                <img src={Newsimg} className="img-fluid rounded" alt="News" />
              </div>
              <div className="px-lg-4 py-lg-3 p-2">
                <h2>10 common mis conceptions about business developement</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
              <div className="border-3 px-lg-4 py-lg-3 p-2 d-flex justify-content-between align-items-center border-secondary border-top">
                <div className="d-flex">
                  <FontAwesomeIcon icon="fa-regular fa-user" /> <p>By John</p>
                </div>

                <div className="d-flex">
                  <p>01-January-2023</p>
                </div>
                <div className="d-flex">
                  <p>Business</p>
                </div>
                <div className="d-flex">
                  <p>0</p>
                </div>
                <div className="d-flex">
                  <button className="btn btn-sm btn-secondary">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card p-3 my-2">
              <h5>Blog Search</h5>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-secondary">Search</Button>
              </Form>
            </div>
            <div className="card p-3 my-2">
              <h5>Topics</h5>
              <div className="">
                <h6>
                  Business <span className="topic-span">(4)</span>
                </h6>
              </div>
              <div className="">
                <h6>
                  Construction <span className="topic-span">(7)</span>
                </h6>
              </div>
              <div className="">
                <h6>
                  Real Estate <span className="topic-span">(20)</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
