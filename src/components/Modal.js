import {Modal , Button} from "react-bootstrap"
import { useState , useEffect  } from "react";


export default function ModalFunction(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    }, []);

    return(
      <>
        <Modal show={show} onHide={handleClose} centered backdrop = "static" keyboard = {false}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to De-Talks</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
