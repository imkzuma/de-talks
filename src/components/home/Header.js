import { Container , Row , Col , Button } from 'react-bootstrap';
import "./style/Header.css";

import Image from '../../img/header-illustration.png';
import Circle from '../../img/particle/circle.png';
import Cube from '../../img/particle/cube.png';
import Rectangle from '../../img/particle/rectangle.png';
import Gear from '../../img/particle/gear.png';
import { motion } from 'framer-motion';

export default function Header(){
    const FromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };
    const FromRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    return(
        <div className = "Header">
            <Container>
                <Row className = 'row-header'>
                    <Col lg = { 5 } className = "col-text-header">
                        <motion.div variants = { FromLeft } initial = "hidden" whileInView = "visible" transition = {{ duration: 1 }}> 
                            <h5>Kami De-Talks</h5>
                            <h1>
                                Stop <span>Watching</span> Lets <span>Learn</span> About Design.
                            </h1>
                            <p>
                                Kami merupakan Perusahaan profesional, yang bergerak dalam bidang Design. Kami menyediakan beberapa kelas Design untuk dipelajari.
                            </p>
                            <Button className = "btn-header-bg"> Daftar Sekarang <i className="fa fa-angle-right arrow" aria-hidden="true" /></Button>
                            <Button className = "btn-header-nobg"> Baca Selengkapnya <i className="fa fa-angle-right arrow" aria-hidden="true" /></Button>
                        </motion.div>
                    </Col>
                    
                    <Col lg = { 7 } className = "col-img-header">
                        <motion.div variants = { FromRight } initial = "hidden" whileInView = "visible" transition = {{ duration: 1 }}>
                            <img src = { Image } alt = "img-header" width = "100%" />
                        </motion.div>
                    </Col>
                </Row>
                <div className = 'relative-pos'>
                    <div className = "circle"> <img src = { Circle } width = "100%" /> </div>
                    <div className = "circle-two"> <img src = { Circle } width = "100%" /> </div>
                    <div className = "rectangle"> <img src = { Rectangle } width = "100%" /> </div>
                    <div className = "cube"> <img src = { Cube } width = "100%" /> </div>
                    <div className = "gear"> <img src = { Gear } width = "100%" /> </div>
                </div>
            </Container>
        </div>
    );
}