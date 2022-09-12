import { Container , Row , Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import "./style/SectionContent.css";

import Photoshop from "../../img/software/photoshop.png";
import Illustrator from "../../img/software/ai.png";
import Figma from "../../img/software/figma.png";
import XD from "../../img/software/xd.png";

export default function SectionContent(){
    const Fade = {
        hidden: { y : "50" , opacity : 0 },
        visible: { y : 0 , opacity : 1 , transition: { duration: 1 } }
    };

    const Scale = {
        hidden: {  opacity : 0 , scale : 0.8 },
        visible: { scale : 1 , opacity : 1 , transition: { duration: 1 } }
    };

    const ScaleTwo = {
        hidden: {  opacity : 0 , scale : 0.8 },
        visible: { scale : 1 , opacity : 1 , transition: { duration: 1 , delay: 0.2 } }
    };

    const ScaleThree = {
        hidden: {  opacity : 0 , scale : 0.8 },
        visible: { scale : 1 , opacity : 1 , transition: { duration: 1 , delay: 0.4 } }
    };

    const ScaleFour = {
        hidden: {  opacity : 0 , scale : 0.8 },
        visible: { scale : 1 , opacity : 1 , transition: { duration: 1 , delay: 0.6 } }
    };

    return(
        <div className = "SectionContent">
            <Container>
                <div className = "SectionContent-title">
                    <motion.div variants = { Fade } initial = "hidden" whileInView= "visible" >
                    <h5>Software Design De-Talks</h5>
                    <h1>Software Yang Kami Ajarkan</h1>
                    </motion.div>
                </div>
                <Row className = "row-content">
                    <Col sm = {6}>
                        <motion.div variants = { Scale } initial = "hidden" whileInView= "visible"  >
                            <Row className = 'row-inside-content'>
                                <Col xs = {3} className = 'col-image-content text-center'>
                                    <img src = {Figma} width = "80%" />
                                </Col>
                                <Col xs = {9} className = 'col-text-content'>
                                    <h4>Figma</h4>
                                    <p>Software desain serta alat prototyping dalam membuat situs web ataupun aplikasi secara kolaboratif. 
                                        Software ini sering digunakan dalam pembuatan UI/UX.
                                    </p>
                                </Col>
                            </Row>
                        </motion.div>
                    </Col>
                    <Col sm = {6}>
                        <motion.div variants = { ScaleTwo } initial = "hidden" whileInView= "visible"  >
                            <Row className = 'row-inside-content'>
                                <Col xs = {3} className = 'col-image-content text-center'>
                                    <img src = {Photoshop} width = "80%" />
                                </Col>
                                <Col xs = {9} className = 'col-text-content'>
                                    <h4>Adobe Photoshop</h4>
                                    <p>
                                        Merupakan software yang mudah digunakan dalam mengolah atau editing foto dan gambar. Software ini juga 
                                        sering digunakan untuk keperluan grafis.
                                    </p>
                                </Col>
                            </Row>
                        </motion.div>
                    </Col>
                    <Col sm = {6}>
                        <motion.div variants = { ScaleThree } initial = "hidden" whileInView= "visible"  >
                            <Row className = 'row-inside-content'>
                                <Col xs = {3} className = 'col-image-content text-center'>
                                    <img src = {Illustrator} width = "80%" />
                                </Col>
                                <Col xs = {9} className = 'col-text-content'>
                                    <h4>Adobe Illustrator</h4>
                                    <p>
                                        Merupakan software yang mudah digunakan dalam mengolah atau editing foto dan gambar. Software ini juga 
                                        sering digunakan untuk keperluan grafis.
                                    </p>
                                </Col>
                            </Row>
                        </motion.div>
                    </Col>
                    <Col sm = {6}>
                        <motion.div variants = { ScaleFour } initial = "hidden" whileInView= "visible"  >
                            <Row className = 'row-inside-content'>
                                <Col xs = {3} className = 'col-image-content text-center'>
                                    <img src = {XD} width = "80%" />
                                </Col>
                                <Col xs = {9} className = 'col-text-content'>
                                    <h4>Adobe XD</h4>
                                    <p>
                                        Merupakan software yang mudah digunakan dalam mengolah atau editing foto dan gambar. Software ini juga 
                                        sering digunakan untuk keperluan grafis.
                                    </p>
                                </Col>
                            </Row>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}