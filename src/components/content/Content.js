import { Container , Row , Col } from 'react-bootstrap';
import "./Content.css";

import Figma from '../../img/figma-design.jpg';
import DesignApp from '../../img/Design-app.png';
import DesignAppOne from '../../img/Design-app-one.png';

export default function Content(){
    return(
        <div className = "Content">
            <Container fluid className = "Content-fluid">
                <Col lg = {6} md = {12} sm = {12} className = "Judul-Content">
                    <p>De-Talks Kelas</p>
                    <h1>Ikuti Alur <span>Belajar Terbaik</span> dari Kami</h1>
                </Col>
                
                <Row className = "Row-Content">
                    <Col lg = { 4 } md = { 12 } sm = { 12 }>
                        <Col lg = {12} className = "Card-Kelas">
                            <img src = {Figma} width = "100%" alt = "INI GAMBAR" />
                            <h5>Belajar Design Menggunakan Aplikasi Figma, Simple dan Gampang</h5>
                            <p>3 courses - 3 hours</p>
                        </Col>
                    </Col>
                    <Col lg = { 4 } md = { 12 } sm = { 12 }>
                        <Col lg = {12} className = "Card-Kelas">
                            <img src = {DesignApp} width = "100%" alt = "INI GAMBAR" />
                            <h5>Belajar Design Menggunakan Aplikasi Figma, Simple dan Gampang</h5>
                            <p>3 courses - 3 hours</p>
                        </Col>
                    </Col>
                    <Col lg = { 4 } md = { 12 } sm = { 12 }>
                        <Col lg = {12} className = "Card-Kelas">
                            <img src = {DesignAppOne    } width = "100%" alt = "INI GAMBAR" />
                            <h5>Belajar Design Menggunakan Aplikasi Figma, Simple dan Gampang</h5>
                            <p>3 courses - 3 hours</p>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}