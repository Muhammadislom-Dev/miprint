import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {


    function refreshPage() {
        window.location.reload();
      }

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={() => refreshPage()} closeButton>
        </Modal.Header>
        <Modal.Body>
          <h5>Siz mahsulotni muvaffaqiyatli  yaratdiz!</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => refreshPage()}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal