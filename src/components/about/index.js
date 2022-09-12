import { useEffect } from 'react';
import { Container , Col , Row , Button } from 'react-bootstrap';
import "./style/index.css";

import IMG from '../../img/about/img-one.png';
import IMGTWO from '../../img/about/img-two.png';

export default function TentangKita(){
    let Header;
    function handleScroll(){
        window.pageYOffset > 50 ? Header.classList.add('tentang-kita-onscroll') : Header.classList.remove('tentang-kita-onscroll');
    }

    useEffect (() => {
        Header = document.getElementById('tentang-kita-scroll');
        window.addEventListener('scroll' , handleScroll);
        return() => {
            window.removeEventListener('scroll' , handleScroll);
        }
    } , []);

    return(
        <>
            <div className = 'tentang-kita' id = 'tentang-kita-scroll'>
                <Container className = 'text-center'>
                    <Row className = 'row-header-tentang-kita'>
                        <Col lg = {6} className = 'header-tentang-kita'>
                            <h1>Tentang De-Talks</h1>
                            <p>
                                De-Talks adalah sebuah platform yang bergerak di bidang edukasi dan pelatihan.
                                Kami berfokus pada bidang Design 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className = 'tentang-kita-two'>
                <Container>
                    <Row>
                        <Col lg = {5} className = 'col-tentang-kita m-auto'>
                            <h1>Kenapa De-Talks dibuat?</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Col>
                        <Col lg = {7} className = 'col-tentang-kita-img'>
                            <img src = {IMG} alt = 'img' width = '100%' />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg = {7} className = 'col-tentang-kita-img-left'>
                            <img src = {IMGTWO} alt = 'img' width = '100%' />
                        </Col>

                        <Col lg = {5} className = 'col-tentang-kita-right m-auto'>
                            <h1>Fokus De-Talks?</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className = 'background-divider-about'>
                <Container>
                    <Row className = 'text-center'>
                        <Col md = {3}>
                            <h5>100</h5>
                            <p>Online Kelas</p>
                        </Col>
                        <Col md = {3}>
                            <h5>100</h5>
                            <p>Online Kelas</p>
                        </Col>
                        <Col md = {3}>
                            <h5>100</h5>
                            <p>Online Kelas</p>
                        </Col>
                        <Col md = {3}>
                            <h5>100</h5>
                            <p>Online Kelas</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}