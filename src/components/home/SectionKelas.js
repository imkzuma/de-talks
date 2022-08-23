import { Container , Row , Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style/SectionKelas.css';

import img from "../../img/accordion/img-four.png";

SwiperCore.use([Navigation , Autoplay]);

export default function SectionKelas(){
    return(
        <div className = "Section-Kelas">
            <Container className = 'container-section-kelas'>
                <Row>
                    <Col lg = {5} className = "col-text-section-kelas mx-auto">
                        <h5>Kelas Populer di De-Talks</h5>
                        <h1>Kelas Design Figma</h1>
                        <p><i class="fa fa-bookmark" aria-hidden="true" />4 Kelas</p>
                        <p><i class="fa fa-users" aria-hidden="true" />1k Siswa belajar di Kelas ini.</p>
                        <hr className = "divider-section-kelas"/>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap
                        </p>

                    </Col>
                    <Col lg = {6}>
                        <Swiper slidesPerView={1.5} navigation className="swipper-kelas">
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}