import {Navbar, Nav, NavDropdown, Container, Carousel} from 'react-bootstrap'
import HeaderImage1 from './../images/1.png';
import HeaderImage2 from './../images/2.png';
import HeaderImage3 from './../images/3.png';
import HeaderImage4 from './../images/4.png';
import HeaderImage5 from './../images/5.png';

const Heading = () => {
    return ( 
        <div>
            {/* Header */}
        <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            Anime List
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeaderImage1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeaderImage2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeaderImage3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeaderImage4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeaderImage5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    <script src="
        https://cdn.jsdelivr.net/npm/react-bootstrap@2.7.4/dist/react-bootstrap.min.js">
    </script>
        </div>
     );
}
 
export default Heading;