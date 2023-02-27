import React from "react";
// import "../styles/home.css";
import Featured from "../assets/images/featured-img.png";
import Card from "react-bootstrap/Card";

function FeaturedPPties() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {/* New Card */}
      <Card className="m-3" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="m-3" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="m-3" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="m-3" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="m-3" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="m-3" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={Featured} />
        <Card.Body>
          <Card.Title>Contemporary apartment</Card.Title>
          <Card.Text className="d-flex justify-content-between">
            <>Price:</>
            <>$3,600/mo</>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FeaturedPPties;
