import { Container , Row , Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import "./style/SectionKelasTwo.css";

import ImgOne from '../../img/design/Design-app-one.png';
import ImgTwo from '../../img/design/Design-app.png';
import ImgThree from '../../img/design/figma-design.jpg';

export default function SectionTwo(){
    const Fade = {
        hidden: { opacity: 0 , y : '-100' },
        visible: { opacity: 1 , y : 0, transition: { duration: 1 } }
    };

    const fromLeft = {
        hidden: { x: -100 , opacity: 0 },
        visible: { x: 0 , opacity: 1 , transition: { duration: 1 } }
    }; 

    const fromTop = {
        hidden: { y: -100 , opacity: 0 },
        visible: { y: 0 , opacity: 1 , transition: { duration: 1 , delay : 0.2 } }
    };

    const fromRight = {
        hidden: { x: 100 , opacity: 0 },
        visible: { x: 0 , opacity: 1 , transition: { duration: 1 , delay : 0.3 } }
    };

    return(
        <div className = 'Section-Kelas-Two'>
            <Container className = 'container-section-two'>
                <Col lg = {12} className = 'section-two-title'>
                    <motion.div variants = { Fade } initial = "hidden" whileInView = "visible">
                        <h5>Roadmap De-Talks</h5>
                        <h1>Alur Terbaik Untuk Membangun Karir</h1>
                    </motion.div>
                </Col>
                <Row className = 'row-section-two'>
                    <Col md = {4} className = 'col-section-two'>
                        <motion.div variants = { fromLeft } initial = 'hidden' whileInView = 'visible'>
                            <Col lg = {12} className = 'col-section-two-inside'>
                                <img src = {ImgOne} alt = 'img-one' width = "100%" />
                                <h5>Belajar Design UI/UX dengan Figma</h5>
                                <p>4 courses • 77 hours</p>
                            </Col>
                        </motion.div>
                    </Col>

                    <Col md = {4} className = 'col-section-two'>
                        <Col lg = {12} className = 'col-section-two-inside'>
                            <motion.div variants = { fromTop } initial = 'hidden' whileInView = 'visible'>
                                <img src = {ImgTwo} alt = 'img-one' width = "100%" />
                                <h5>Belajar Menggunakan Illustrator</h5>
                                <p>3 courses • 40 hours</p>
                            </motion.div>
                        </Col>
                    </Col>

                    <Col md = {4} className = 'col-section-two'>
                        <Col lg = {12} className = 'col-section-two-inside'>
                            <motion.div variants = { fromRight } initial = 'hidden' whileInView = 'visible'>
                                <img src = {ImgThree} alt = 'img-one' width = "100%" />
                                <h5>Photoshop Untuk Membuat Poster</h5>
                                <p>4 courses • 17 hours</p>
                            </motion.div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}