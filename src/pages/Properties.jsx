import React from "react";
import Property1 from "../assets/images/properties1.jfif";
import Property2 from "../assets/images/property2.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faKitchenSet,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

const properties = [
  {
    title: "Tastefully Finished 3- Bedrooms Flat",
    img: Property1,
    detail: "Flat / apartment for sale",
    paragraph:
      "House is currently occupied- spacious 3- bedrooms flat on the first floor in a secured and serene estate in wuye. tarred access road to the estate, fully occupied.",
    price: "52,000,000",
    bedroom: "4",
    bathroom: "3",
    kitchen: "1",
    parkingLot: "3",
  },
  {
    title: "Tastefully Finished 3- Bedrooms Flat",
    img: Property2,
    detail: "Flat / apartment for sale",
    paragraph:
      "House is currently occupied- spacious 3- bedrooms flat on the first floor in a secured and serene estate in wuye. tarred access road to the estate, fully occupied.",
    price: "83,000,000",
    bedroom: "7",
    bathroom: "4",
    kitchen: "2",
    parkingLot: "8",
  },
];

const homes = properties.map((item, index) => (
  <div key={index} className="col-lg-6 my-3">
    <div className="bg-white p-2 rounded shadow">
      <h3 className="mt-2">{item.title}</h3>
      <div className="row py-3 align-items-center">
        <div className="col-lg-6">
          <img src={item.img} className="cus-img rounded" alt="Property" />
        </div>
        <div className="col-lg-6 py-1">
          <h4 className="mb-0 fs-5 fw-bold">{item.detail}</h4>
          <p className="fs-6">{item.paragraph}</p>
          <h4 className="border-top text-success fw-bold">${item.price}</h4>
        </div>
      </div>
      <div className="cus-bg-2 rounded-bottom d-flex justify-content-between text-white align-items-center flex-row mb-3">
        <div className="p-2">
          <span>
            <i>
              <FontAwesomeIcon className="me-2" icon={faBed} />
            </i>
          </span>
          <span>
            <span>{item.bedroom}</span> Bedrooms
          </span>
        </div>
        <div className="p-2">
          <span>
            <i>
              <FontAwesomeIcon className="me-2" icon={faBath} />
            </i>
          </span>
          <span>{item.bathroom}</span> <span>Bathrooms</span>
        </div>
        <div className="p-2">
          <span>
            <i>
              <FontAwesomeIcon className="me-2" icon={faKitchenSet} />
            </i>
          </span>
          <span>{item.kitchen}</span> <span>Kitchen</span>
        </div>
        <div className="p-2">
          <span>
            <i>
              <FontAwesomeIcon className="me-2" icon={faCar} />
            </i>
          </span>
          <span>{item.parkingLot}</span> <span>Parking Lots</span>
        </div>
      </div>
    </div>
  </div>
));

function Properties() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center p-2">
            {homes}
            {/* <div className="col-lg-6 my-3">
              <div className="bg-white p-2 rounded shadow">
                <h3 className="mt-2">Tastefully Finished 3- Bedrooms Flat</h3>
                <div className="row py-3 align-items-center">
                  <div className="col-lg-6">
                    <img
                      src={Property2}
                      className="cus-img rounded"
                      alt="Property"
                    />
                  </div>
                  <div className="col-lg-6 py-1">
                    <h4 className="mb-0 fs-5 fw-bold">
                      Flat / apartment for sale
                    </h4>
                    <p className="fs-6">
                      House is currently occupied- spacious 3- bedrooms flat on
                      the first floor in a secured and serene estate in wuye.
                      tarred access road to the estate, fully occupied.
                    </p>
                    <h4 className="border-top text-success fw-bold">
                      ₦52,000,000
                    </h4>
                  </div>
                </div>
                <div className="cus-bg-2 rounded-bottom d-flex justify-content-between text-white align-items-center flex-row mb-3">
                  <div className="p-2">3 Bedrooms</div>
                  <div className="p-2">3 Bathrooms</div>
                  <div className="p-2">1 Kitchen</div>
                  <div className="p-2">3 Parking Spaces</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Properties;
