import { Container , Row , Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import "./style/Footer.css";

import Logo from '../../img/Logo.png';

export default function Footer(){

    const Fade = {
        hidden: {  opacity : 0 },
        visible: {  opacity : 1 , transition: { duration: 1 } }
    };

    return(
        <div className = "Footer">
            <motion.div variants = { Fade } initial = "hidden" whileInView = "visible">
            <Container>
                <Row className = 'row-footer'>
                    <Col lg = {4} md = {5} className = 'col-footer-logo'>
                        <img src = {Logo} alt = "Logo" width = "15%" />
                        <h5>De-Talks</h5>
                        <p>
                            Kami merupakan Perusahaan profesional, yang bergerak dalam bidang Design. Kami menyediakan beberapa kelas Design untuk dipelajari.
                        </p>
                    </Col>

                    <Col lg = {2} md = {5} className = 'col-content-footer mx-auto'>
                        <h4>Design Kelas</h4>
                        <p>Kelas Figma</p>
                        <p>Kelas Photoshop</p>
                        <p>Kelas XD</p>
                        <p>Kelas Illustrator</p>
                    </Col>

                    <Col lg = {2} md = {6} className = 'col-content-footer mx-auto'>
                        <h4>Course</h4>
                        <p>UI / UX Designer</p>
                        <p>Web Designer</p>
                    </Col>

                    <Col lg = {2} md = {6} className = 'col-content-footer mx-auto'>
                        <h4>Company</h4>
                        <p>Tentang Kami</p>
                        <p>FAQs</p>
                        <p>Teams</p>
                        <p>Contact Us</p>
                    </Col>
                </Row>
                <div className = 'footer-copy d-flex justify-content-between vertical-align-center'>
                    <p>&copy; De-Talks 2022. All Right Reserved.</p>
                    <p>IF-JGAA-22</p>
                </div>
            </Container>
            </motion.div>
        </div>
    );
}