import Carousel from "react-bootstrap/Carousel";
import Firstslide from "../assets/images/slide1.svg";
import Secondslide from "../assets/images/slide2.png";
// import Thirdslide from "../assets/images/slide3.jpg";
import Forthslide from "../assets/images/slide4.jpg";
import Fifthslide from "../assets/images/slide5.jpg";
import Viewprop from "../assets/images/viewprops.jfif";

function CarouselFadeExample() {
  const carousels = [
    {
      background: Viewprop,
      title: "Put your First label here",
      body: "Explain the body in details here",
    },
    {
      background: Secondslide,
      title: "Put your Second label here",
      body: "Explain the body in details here",
    },
    {
      background: Firstslide,
      title: "Put your Second label here",
      body: "Explain the body in details here",
    },
    {
      background: Forthslide,
      title: "Put your Second label here",
      body: "Explain the body in details here",
    },
    {
      background: Fifthslide,
      title: "Put your Second label here",
      body: "Explain the body in details here",
    },
  ];

  const slides = carousels.map((item, index) => (
    <Carousel.Item
      key={index}
      style={{
        background: `url(${item.background})`,
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img className="d-block w-100" alt="First slide" /> */}
      <Carousel.Caption>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Carousel fade>
      {slides}
      {/* <Carousel.Item
        style={{
          background: `url(${Firstslide})`,
          height: "90vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block custom-width-100 custom-height-100"
          src={Secondslide}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselFadeExample;
