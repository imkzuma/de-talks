import { Container , Row , Col , Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './style/SectionFooter.css';

export default function SectionFooter(){
    const BounceIn = {
        hidden: {  y : '-100' },
        visible: {  y : 0, transition: { duration: 1 } }
    };

    return(
        <div className = "SectionFooter">
            <motion.div variants = { BounceIn } initial = "hidden" whileInView = "visible">
                <Container className = 'container-section-footer'>
                    <Row>
                        <Col lg = {8}>
                            <h2>Belajar design yang menarik sekarang juga</h2>
                            <p>
                                <i className = 'fa fa-check-circle-o ux' />UX Design
                                <i className = 'fa fa-check-circle-o ui' />UI Design
                            </p>
                        </Col>
                        <Col lg = {4} className = 'col-btn-sec-footer m-auto'>
                            <Button className = 'btn-section-footer'>Daftar Sekarang</Button>
                            <Button className = 'btn-section-footer-two'>Hubungi Kami</Button>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    );
}