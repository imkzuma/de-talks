import { Container , Row , Col , Button  } from 'react-bootstrap';
import { Motion } from 'framer-motion';
import "./Header.css";
import IMG  from '../../img/header-img.gif';

export default function Header(){
    return(
        <div className='Header'> 
        <div className = "ellipse" />
            <Container>
                <Row className = 'row-header'>
                    <p className = "vr-text">Baca Selengkapnya</p>
                    <Col lg = { 5 } sm = { 12 } md = { 12 } className = "header-col-text"> 
                    <hr className = "hr-header" />
                        <h5>We're De-Talks</h5> 
                        <h1> Stop <span>Watching</span>, Lets <span>Learn</span> About Design.</h1>
                        <p>
                            Kami merupakan penyedia Platform belajar Design yang ngajarin kamu berbagai macam soft skill dan hard skill yang bisa 
                            kamu gunakan untuk mendapatkan penghasilan. Dengan belajar disini akan mendapatkan banyak benefit, 
                            cukup dengan sekali daftar kalian bisa menjadi member, dari yang awalnya tidak bisa design menjadi jago dalam design.
                        </p>
                        <Button className = "btn-header">Daftar Sekarang</Button>
                    </Col>
                    <Col lg = { 7 } sm = { 12 } md = { 12 } className = "header-col-img text-center">
                        <img src = { IMG } width = "100%" />
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
}