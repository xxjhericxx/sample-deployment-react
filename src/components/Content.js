import {Container, Row} from 'react-bootstrap'
import GridItems from './GridItems';
import item1 from './../images/1.png';
import item2 from './../images/2.png';
import item3 from './../images/3.png';
import item4 from './../images/4.png';
import item5 from './../images/5.png';

const Content = () => {
    return ( 
        <div className="bg-dark text-warning text-center">
            <br /><br />
            <Container>
                <h1>Top 5 Animes of the week: </h1>
                <br /><br />
                <Row className="g-5 justify-content-center">
                    <GridItems image={item1} title="Kimetsu No Yaiba"/>
                    <GridItems image={item2} title="Haikyu!!"/>
                    <GridItems image={item3} title="Eyeshield 21"/>
                    <GridItems image={item4} title="Kuroko no Basuke"/>
                    <GridItems image={item5} title="Yamato Nadeshiko Shichihenge"/>
                </Row>
            </Container>
            <br /><br />
        </div>
     );
}
 
export default Content;