import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function EModal({show,handleClose}) {
  


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>İlgili Alanlarda Hata Yaptınız</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>Çalışan İsmi En Az 2 Harfli Olmak Zorundadır</li>
                <li>Çalışan Maaşı En Az 5000 ₺  Zorundadır</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Anladım
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EModal;
