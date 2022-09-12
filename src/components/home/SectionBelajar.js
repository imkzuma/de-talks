import { Container , Row , Col , Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import "./style/SectionBelajar.css";

import Image from '../../img/people-figma.png';

export default function SectionBelajar(){
    const Scale = {
        hidden: { scale: 0.6 , opacity: 0 },
        visible: { opacity : 1, scale: 1 , transition: { duration: 1 , delay : 0.3 } }
    };

    const fromTop = {
        hidden: { y: -100 , opacity: 0 },
        visible: { y: 0 , opacity: 1 , transition: { duration: 1 } }
    };

    return(
        <div className = "Section-Belajar">
            <Container>
                <Row className = 'row-section-belajar'>
                    <Col md = { 5 } className = 'col-text-section-belajar'>
                        <motion.div variants = { fromTop } initial = "hidden" whileInView = "visible">
                            <h5>Handbook De-Talks</h5>
                            <h1>Masih Bingung Mulai Belajar Dari Mana?</h1>
                            <p>
                                Kami menyediakan HandBook sebagai panduan utama
                                untuk Anda mengenal berbagai profesi yang tersedia
                                di bidang design dan teknologi.
                            </p>
                            <Button className = 'btn-section-belajar'> Baca Selengkapnya <i className = "fa fa-angle-right arrow" /> </Button>
                        </motion.div>
                    </Col>
                    <Col md = { 7 } className = 'col-img-section-belajar'>
                        <motion.div variants = { Scale } initial = "hidden" whileInView = "visible">
                            <img src = { Image } width = "100%" alt = "people-figma" />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}