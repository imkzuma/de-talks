import { Container , Row , Col , Accordion } from "react-bootstrap";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./style/SectionAbout.css";

import Default from '../../img/accordion/img-default.png';  // Gambar diedit sendiri
import imgTwo from '../../img/accordion/img-two.png';       // Gambar diedit sendiri
import imgThree from '../../img/accordion/img-three.png';   // Gambar diedit sendiri
import imgFour from '../../img/accordion/img-four.png';     // Gambar diedit sendiri
import imgFive from '../../img/accordion/img-five.png';     // Gambar diedit sendiri

export default function SectionAbout(){
    const[Image , setImage] =  useState(Default);
    const[Id , setId] = useState(0);

    const FadeIn = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    }

    const FadeInDelay = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration : 1} }, 
    }

    const fromTop = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    }
       
    return(
        <div className = "Section-About">
            <Container>
                <Row className = "section-about-title mx-auto">
                    <Col lg = {6} className = "mx-auto">
                        <motion.div variants = {FadeIn} initial = "hidden" whileInView = "visible">
                            <h1>Kenapa De-Talks Berbeda ?</h1>
                            <p>
                                Saatnya bijak memilih sumber belajar. Tak hanya materi yang terjamin,
                                De-Talks juga memiliki Pengajar profesional yang akan mengajari anda tentang Design.
                            </p>
                        </motion.div>
                    </Col>
                </Row>

                <Row className = "mx-auto row-section-about">
                    <Col lg = {5} className = "mx-auto col-text-section-about">
                        <motion.div variants = {fromTop} initial = "hidden" whileInView = "visible">
                            <Accordion className = "accordion-about" defaultActiveKey = {"0"}>
                                <Accordion.Item eventKey="0" onClick = {() => {setImage(Default); setId(1); }}>
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
                                
                                <Accordion.Item eventKey="1" onClick = {() => {setImage(imgTwo); setId(1); }}>
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

                                <Accordion.Item eventKey="2" onClick = {() => {setImage(imgFour); setId(1); }}>
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

                                <Accordion.Item eventKey="3" onClick = {() => {setImage(imgThree); setId(1); }}>
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

                                <Accordion.Item eventKey="4" onClick = {() => {setImage(imgFive); setId(1); }}>
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
                        </motion.div>
                    </Col>

                    <Col lg = {6} className = "img-section-about mx-auto">
                        <motion.div variants = {FadeInDelay} initial = "hidden" whileInView = 'visible' >
                        <img src = { Image } width = "100%" className = 'animate' />
                        </motion.div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
}