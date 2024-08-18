import IconSvg from "../IconSvg/IconSvg";
import RetingLocation from "../RetingLocation/RetingLocation";
import css from "./ModalScowMore.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "982px",
    height: "auto",
    margin: "auto",
    padding: "30px",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const ModalShowMore = ({ camper, isOpen, closeModal }) => {
  if (!isOpen || !camper) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.modalContent}>
        <div className={css.containerHeader}>
          <h2>{camper.name}</h2>
          <button className={css.btn} onClick={closeModal}>
            <IconSvg
              iconName="icon-clous"
              width="32"
              height="32"
              className={css.iconns}
            />
          </button>
        </div>
        <RetingLocation camper={camper} />

        <p>€{camper.price}</p>

        <div className={css.containerImg}>
          {camper.gallery.map((imgSrc, index) => (
            <img
              key={index}
              className={css.camperImg}
              src={imgSrc}
              alt={`${camper.name} ${index + 1}`}
            />
          ))}
        </div>

        <p className={css.description}>{camper.description}</p>
        <div className={css.autlet}>
          <p>Features</p>
          <p>Reviews</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalShowMore;
