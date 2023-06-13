import {Card, Col, Button} from 'react-bootstrap'

const GridItems = (props) => {
    return ( 
        <>
            <Col md= "4">
              <Card>
                <Card.Img variant='top' src={props.image}/>
                <Card.Body>
                  <Card.Title>
                    {props.title}
                  </Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quis provident sed, eum ea ipsam veritatis id quae similique reprehenderit expedita itaque, 
                        eaque rerum soluta asperiores fugit doloribus minima velit mollitia.
                    </Card.Text>
                    <Button variant='primary'>More Info</Button>
                </Card.Body>
            </Card>
          </Col>
        </>
     );
}
 
export default GridItems;