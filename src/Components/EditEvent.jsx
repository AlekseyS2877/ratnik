import React from "react";
import { Button, Modal } from "react-bootstrap";
import Event from "../dataTypes/Event";

const EditEvent = ({ event, onHide }) => {
   let show = false;
   if (event instanceof Event) {
      show = true;
   }
   return (
      <Modal
         show={show}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         onHide={onHide}
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{event.id()}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <h4>{event.start().getTime()}</h4>
            <p>{event.description()}</p>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
               Close
            </Button>
            <Button variant="primary" onClick={onHide}>
               Save Changes
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default EditEvent;
