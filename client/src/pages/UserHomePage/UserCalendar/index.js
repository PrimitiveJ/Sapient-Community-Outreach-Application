import { Modal } from "react-bootstrap";
import { images } from "../../../assets";

const UserCalendarModal = ({ modalActive, hideModal }) => {
  return (
    <>
      <Modal show={modalActive} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>My Event Calendar</Modal.Title>
        </Modal.Header>
        <img src={images.icons.calendarImage} alt="calendar" />;
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default UserCalendarModal;
