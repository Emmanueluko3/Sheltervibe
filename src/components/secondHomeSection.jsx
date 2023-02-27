import React from "react";
import "../styles/home.css";

function Hsec2() {
  return (
    <>
      <div className="container my-5 py-5 d-flex flex-column justify-content-center items-center align-items-center">
        <h2>The Best Way To Find Your Home​</h2>
        <p>
          Help your visitors find the right property by letting them set various
          search criteria
        </p>
        <form
          action=""
          className="my-3 row justify-content-center items-center align-items-center"
        >
          <div className="col-lg-3 col-xsm-1 my-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Enter Keyword..."
            />
          </div>

          <div className="col-lg-2 my-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Status"
            />
          </div>
          <div className="col-lg-2 my-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Type"
            />
          </div>
          <div className="col-lg-2 my-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Bedrooms"
            />
          </div>
          <div className="col-lg-2 my-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Bathrooms"
            />
          </div>
          <div className="col-lg-2 my-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="All Cities"
            />
          </div>
          <div className="col-lg-2 my-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Min. Price"
            />
          </div>
          <div className="col-lg-3 my-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Max. Price"
            />
          </div>

          <div className="col-lg-3 my-2">
            <button className="btn btn-success w-100 py-3" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Hsec2;
