
import Modal from "react-bootstrap/Modal";
import Result from "../Result/Result";
import "./modal.css"
function ModalDialog(props) {
  console.log(props.item);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="mod"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.item.url}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.item.method}</h4>
       <Result result={props.item.response} size={12} spinnerShow={false}/>
      </Modal.Body>
    </Modal>
  );
}

export default ModalDialog;
