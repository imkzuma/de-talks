import { Container , Row , Col ,  Accordion } from 'react-bootstrap';
import "./ContentTwo.css";
import ContentImg from "../../img/content-two.gif";

export default function ContentTwo(){
    return(
        <div className = "Content-Two">
            <Container className = "Container-Content-Two">
                <Row className = "Row-Content-Two">
                    <Col lg = {7} md = {12} sm = {12} className = "img-content-two">
                        <img src = {ContentImg} width = "100%" alt = "ANIMASI GAMBAR" />
                    </Col>

                    <Col lg = {5} md = {12} sm = {12} className = "text-content-two">
                        <p>De-Talks</p>
                        <h1>Sekilas Tentang <span>Kelas Design</span></h1>

                        <Accordion>
                            <Accordion.Item eventKey = "0" className = "Accordion-Item">
                                <Accordion.Header className = "Header-Accordion"><d>Mengapa Memilih De-Talks ?</d></Accordion.Header>
                                <Accordion.Body className = "Body-Accordion">
                                    <h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare bibendum pretium. 
                                        Duis faucibus eget velit non volutpat. Mauris vehicula congue consectetur. Mauris eget arcu ac 
                                        urna mollis porttitor hendrerit vitae tortor. Pellentesque eget enim eget eros dignissim euismod.
                                        Sed non euismod sem, nec lobortis nisl. Donec ac risus eleifend
                                    </h5>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey = "1" className = "Accordion-Item">
                                <Accordion.Header className = "Header-Accordion"><d>Mengapa Memilih De-Talks ?</d></Accordion.Header>
                                <Accordion.Body className = "Body-Accordion">
                                    <h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare bibendum pretium. 
                                        Duis faucibus eget velit non volutpat. Mauris vehicula congue consectetur. Mauris eget arcu ac 
                                        urna mollis porttitor hendrerit vitae tortor. Pellentesque eget enim eget eros dignissim euismod.
                                        Sed non euismod sem, nec lobortis nisl. Donec ac risus eleifend
                                    </h5>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey = "2" className = "Accordion-Item">
                                <Accordion.Header className = "Header-Accordion"><d>Mengapa Memilih De-Talks ?</d></Accordion.Header>
                                <Accordion.Body className = "Body-Accordion">
                                    <h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare bibendum pretium. 
                                        Duis faucibus eget velit non volutpat. Mauris vehicula congue consectetur. Mauris eget arcu ac 
                                        urna mollis porttitor hendrerit vitae tortor. Pellentesque eget enim eget eros dignissim euismod.
                                        Sed non euismod sem, nec lobortis nisl. Donec ac risus eleifend
                                    </h5>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey = "3" className = "Accordion-Item">
                                <Accordion.Header className = "Header-Accordion"><d>Mengapa Memilih De-Talks ?</d></Accordion.Header>
                                <Accordion.Body className = "Body-Accordion">
                                    <h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare bibendum pretium. 
                                        Duis faucibus eget velit non volutpat. Mauris vehicula congue consectetur. Mauris eget arcu ac 
                                        urna mollis porttitor hendrerit vitae tortor. Pellentesque eget enim eget eros dignissim euismod.
                                        Sed non euismod sem, nec lobortis nisl. Donec ac risus eleifend
                                    </h5>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey = "4" className = "Accordion-Item">
                                <Accordion.Header className = "Header-Accordion"><d>Mengapa Memilih De-Talks ?</d></Accordion.Header>
                                <Accordion.Body className = "Body-Accordion">
                                    <h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare bibendum pretium. 
                                        Duis faucibus eget velit non volutpat. Mauris vehicula congue consectetur. Mauris eget arcu ac 
                                        urna mollis porttitor hendrerit vitae tortor. Pellentesque eget enim eget eros dignissim euismod.
                                        Sed non euismod sem, nec lobortis nisl. Donec ac risus eleifend
                                    </h5>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey = "5" className = "Accordion-Item">
                                <Accordion.Header className = "Header-Accordion"><d>Mengapa Memilih De-Talks ?</d></Accordion.Header>
                                <Accordion.Body className = "Body-Accordion">
                                    <h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare bibendum pretium. 
                                        Duis faucibus eget velit non volutpat. Mauris vehicula congue consectetur. Mauris eget arcu ac 
                                        urna mollis porttitor hendrerit vitae tortor. Pellentesque eget enim eget eros dignissim euismod.
                                        Sed non euismod sem, nec lobortis nisl. Donec ac risus eleifend
                                    </h5>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}