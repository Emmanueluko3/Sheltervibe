import React from "react";
import Viewprop from "../assets/images/viewprops.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faKitchenSet,
  faCar,
  faHouse,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Viewproperty() {
  return (
    <>
      <div className="bg-light py-4">
        {/* Top */}
        <div className="container">
          <h6 className="text-secondary">
            Family Home Luxury and Spacious Home on the Coast
          </h6>
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="fs-2">Luxury and Spacious Home on The Coast</h3>
              <div className="my-2">
                <span className="bg-success text-white fw-bold p-1 rounded me-1">
                  For Sale
                </span>
                <span className="bg-secondary text-white fw-bold p-1 rounded ms-1">
                  For Rent
                </span>
              </div>
              <p className="text-secondary">
                <FontAwesomeIcon icon={faLocationDot} /> 3516 N 10th St, Tampa,
                FL 33605
              </p>
            </div>
            <div>
              <h3 className="fw-bold">$670,000</h3>
              <p className="text-secondary">$1,300/mo</p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: `url(${Viewprop})`,
            height: "90vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container py-3 d-flex flex-column justify-content-center align-items-center">
          <h3 className="fs-2 py-3">Description</h3>
          <p>
            Welcome to this stunning property, located in the heart of the city
            and now available for both sale and rent through Citadel. This
            modern and luxurious condo offers the perfect combination of style,
            comfort, and convenience, and is perfect for those seeking an urban
            lifestyle in a prime location.
          </p>
          <p>
            As you enter this bright and spacious condo, you'll be immediately
            impressed by the open and airy living space, complete with high
            ceilings and large windows that provide an abundance of natural
            light. The sleek and modern kitchen features top-of-the-line
            appliances and plenty of counter space, making it the perfect space
            for preparing gourmet meals
          </p>
        </div>

        <div className="container">
          <div className="d-flex justify-content-between cus-text-1 fs-3 align-items-center flex-wrap flex-row mb-3">
            <div className="p-2">
              <span>
                <i>
                  <FontAwesomeIcon className="me-2" icon={faBed} />
                </i>
              </span>
              <span>
                <span>1</span> Bedrooms
              </span>
            </div>
            <div className="p-2">
              <span>
                <i>
                  <FontAwesomeIcon className="me-2" icon={faBath} />
                </i>
              </span>
              <span>3</span> <span>Bathrooms</span>
            </div>
            <div className="p-2">
              <span>
                <i>
                  <FontAwesomeIcon className="me-2" icon={faKitchenSet} />
                </i>
              </span>
              <span>1</span> <span>Kitchen</span>
            </div>
            <div className="p-2">
              <span>
                <i>
                  <FontAwesomeIcon className="me-2" icon={faCar} />
                </i>
              </span>
              <span>1</span> <span>Parking Lots</span>
            </div>
            <div className="p-2">
              <span>
                <i>
                  <FontAwesomeIcon className="me-2" icon={faHouse} />
                </i>
              </span>
              <span>Size:</span> <span>1200 Sq Ft</span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="">
          <h2>Gallery</h2>
          <div className="row">
            <div className="col-lg-3 p-0">
              <img src={Viewprop} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-3 p-0">
              <img src={Viewprop} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-3 p-0">
              <img src={Viewprop} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-3 p-0">
              <img src={Viewprop} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-3 p-0">
              <img src={Viewprop} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-3 p-0">
              <img src={Viewprop} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-cent cus-text-1">Features</h2>
              <div className="d-flex flex-wrap justify-content-between">
                <h4 className="fw-normal text-center w-50 fs-5">
                  Air Conditioning
                </h4>
                <h4 className="fw-normal text-center w-50 fs-5">
                  Refrigerator
                </h4>
                <h4 className="fw-normal text-center w-50  fs-5">
                  Refrigerator
                </h4>
                <h4 className="fw-normal text-center w-50  fs-5">
                  Refrigerator
                </h4>
                <h4 className="fw-normal text-center w-50 fs-5">
                  Refrigerator
                </h4>
                <h4 className="fw-normal text-center w-50 fs-5">
                  Refrigerator
                </h4>
                <h4 className="fw-normal text-center w-50 fs-5">
                  Refrigerator
                </h4>
                <h4 className="fw-normal text-center w-50 fs-5">
                  Refrigerator
                </h4>
                <h4 className="fw-normal text-center w-50 fs-5">
                  Refrigerator
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewproperty;
