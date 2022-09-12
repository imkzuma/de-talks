import { Container , Row , Col , Button , Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay , Pagination } from "swiper";
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style/SectionTestimoni.css';

import imgOne from '../../img/testimoni/img-1.png';
import imgTwo from '../../img/testimoni/img-2.png';
import imgThree from '../../img/testimoni/img-3.png';
import imgFour from '../../img/testimoni/img-4.png';

SwiperCore.use([Navigation , Autoplay , Pagination]);

export default function SectionTestimoni(){

    const Fade = {
        hidden: { opacity: 0 , y : '100' },
        visible: { opacity: 1 , y : 0, transition: { duration: 1 } }
    }

    return(
        <div className = "SectionTestimoni">
            <Container>
                <motion.div variants = { Fade } initial = "hidden" whileInView = "visible">
                    <div className = 'd-flex justify-content-between align-items-center title-testimoni'>
                        <h1>Apa Kata Mereka</h1>

                        <div className = "control-right">
                        <Button className = "swiper-prev-testimoni btn-outline-primary"><i className = "fa fa-arrow-left" /></Button> 
                        <Button className = "swiper-next-testimoni btn-outline-primary"><i className = "fa fa-arrow-right" /></Button>   
                        </div>
                    </div> 
                    <Row className = 'mx-auto mt-4'>
                        <Col lg = {12}>
                            <Swiper
                                pagination = {{clickable: true}}
                                navigation = {{ // Navigation Custom Arrows
                                    prevEl: '.swiper-prev-testimoni', // Classname of the previous button
                                    nextEl: '.swiper-next-testimoni' // Classname of the next button
                                }}
                                autoplay = {{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                                loop = {true}
                                slidesPerView = {1}
                            >
                                <SwiperSlide>
                                    <Row className = 'bg-white row-rounded'>
                                        <Col md = {5} className = "testimoni-img text-center">
                                            <Image src = {imgOne} width = "90%" fluid />
                                        </Col>
                                        <Col md = {7} className = "testimoni-text">
                                            <h1>John Doe</h1>
                                            <h5>Web Designer</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                            </p>
                                            <hr />
                                            <b>Lulusan De-Talks</b>
                                        </Col>
                                    </Row>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Row className = 'bg-white row-rounded'>
                                        <Col md = {5} className = "testimoni-img text-center">
                                            <Image src = {imgTwo} width = "90%" fluid />
                                        </Col>
                                        <Col md = {7} className = "testimoni-text">
                                            <h1>John Doe</h1>
                                            <h5>Web Designer</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                            </p>
                                            <hr />
                                            <b>Lulusan De-Talks</b>
                                        </Col>
                                    </Row>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Row className = 'bg-white row-rounded'>
                                        <Col md = {5} className = "testimoni-img text-center">
                                            <Image src = {imgThree} width = "90%" fluid />
                                        </Col>
                                        <Col md = {7} className = "testimoni-text">
                                            <h1>John Doe</h1>
                                            <h5>Web Designer</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                            </p>
                                            <hr />
                                            <b>Lulusan De-Talks</b>
                                        </Col>
                                    </Row>                              
                                </SwiperSlide>

                                <SwiperSlide>                              
                                    <Row className = 'bg-white row-rounded'>
                                        <Col md = {5} className = "testimoni-img text-center">
                                            <Image src = {imgFour} width = "90%" fluid />
                                        </Col>
                                        <Col md = {7} className = "testimoni-text">
                                            <h1>John Doe</h1>
                                            <h5>Web Designer</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                                Lorem ipsum dolor sit amet dolor ipsum is sit amet where dolor can ipsu
                                            </p>
                                            <hr />
                                            <b>Lulusan De-Talks</b>
                                        </Col>
                                    </Row>                                
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </div>
    )
}