import { Container , Row , Col , Accordion } from "react-bootstrap";
import { useState } from "react";
import "./style/SectionAbout.css";

import Default from '../../img/accordion/img-default.png';
import imgTwo from '../../img/accordion/img-two.png';
import imgThree from '../../img/accordion/img-three.png';
import imgFour from '../../img/accordion/img-four.png';

export default function SectionAbout(){
    const[Image , setImage] =  useState(Default);
    const[Animate , setAnimate] = useState(false);
    return(
        <div className = "Section-About">
            <Container>
                <Row className = "section-about-title">
                    <Col lg = {6} className = "mx-auto">
                        <h1>Kenapa De-Talks Berbeda ?</h1>
                        <p>
                            Saatnya bijak memilih sumber belajar. Tak hanya materi yang terjamin,
                            De-Talks juga memiliki Pengajar profesional yang akan mengajari anda tentang Design.
                        </p>
                    </Col>
                </Row>

                <Row className = "mx-auto row-section-about">
                    <Col lg = {5} className = "mx-auto col-text-section-about">
                        <Accordion className = "accordion-about" defaultActiveKey = {"0"}>
                            <Accordion.Item eventKey="0" onClick = {() => {setImage(imgTwo); setAnimate(true);}}>
                                <Accordion.Header>Mengapa Memilih De-Talks</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" onClick = {() => setImage(imgThree)}>
                                <Accordion.Header>Keuntungan Belajar di De-Talks</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" onClick = {() => setImage(imgFour)}>
                                <Accordion.Header>Keuntungan Belajar di De-Talks</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" onClick = {() => setImage(imgThree)}>
                                <Accordion.Header>Keuntungan Belajar di De-Talks</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                    <Col lg = {6} className = "img-section-about mx-auto">
                        <img src = { Image } width = "100%" className = "animate" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}