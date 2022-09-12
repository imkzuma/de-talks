import { Container , Row , Col , Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style/SectionKelas.css';

import img from "../../img/accordion/img-four.png";

SwiperCore.use([Navigation]);

export default function SectionKelas(){
    const fromLeft = {
        hidden: { x: -100 , opacity: 0 },
        visible: {  x: 0,  opacity: 1 }
    };

    const fromRight = {
        hidden: { x: 100 , opacity: 0},
        visible: { opacity: 1, x: 0 }
    };

    return(
        <div className = "Section-Kelas">
            <Container className = 'container-section-kelas'>
                <Row>
                    <Col lg = {5} className = "col-text-section-kelas mx-auto">
                        <motion.div variants={fromLeft} initial="hidden" whileInView="visible" transition={{ duration: 1 , delay : 0.5 }}>
                            <h5>Kelas Populer di De-Talks</h5>
                            <h1>Kelas Design Figma</h1>
                            <p><i class="fa fa-bookmark" aria-hidden="true" />4 Kelas</p>
                            <p><i class="fa fa-users" aria-hidden="true" />1k Siswa belajar di Kelas ini.</p>
                            <Col lg = {12} className = "item-kelas mx-auto">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap
                                    </p>
                            </Col>
                       </motion.div>
                    </Col>
                    <Col lg = {6} className = 'col-for-swiper'>
                        <motion.div variants={fromRight} initial="hidden" whileInView="visible" transition={{ duration: 1 , delay : 0.5 }}>
                        <div className = "d-sm-flex justify-content-end swiper-navigation">
                            <Button className = "swiper-prev btn-outline-primary"><i className = "fa fa-arrow-left" /></Button> 
                            <Button className = "swiper-next btn-outline-primary"><i className = "fa fa-arrow-right" /></Button>
                        </div>
                        <Swiper 
                            slidesPerView={1.5} 
                            spaceBetween={10} 
                            className="swipper-kelas"

                            navigation = {{ // Navigation Custom Arrows
                                prevEl: '.swiper-prev', // Classname of the previous button
                                nextEl: '.swiper-next' // Classname of the next button
                            }}
                            
                        >
                            <SwiperSlide>
                                <Col lg = {11} className = "col-text-swiper mx-auto">
                                    <img src = {img} width = "100%"/>
                                    <h1>Hello</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet
                                        dolor ipsum is sit amet where dolor can ipsu
                                    </p>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col lg = {11} className = "col-text-swiper mx-auto">
                                    <img src = {img} width = "100%"/>
                                    <h1>Hello</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet
                                        dolor ipsum is sit amet where dolor can ipsu
                                    </p>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col lg = {11} className = "col-text-swiper mx-auto">
                                    <img src = {img} width = "100%"/>
                                    <h1>Hello</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet
                                        dolor ipsum is sit amet where dolor can ipsu
                                    </p>
                                </Col>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Col lg = {11} className = "col-text-swiper mx-auto">
                                    <img src = {img} width = "100%"/>
                                    <h1>Hello</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet
                                        dolor ipsum is sit amet where dolor can ipsu
                                    </p>
                                </Col>
                            </SwiperSlide>
                        </Swiper>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}