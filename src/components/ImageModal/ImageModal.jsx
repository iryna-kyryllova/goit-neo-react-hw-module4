import Modal from 'react-modal'
import styles from './ImageModal.module.css'

Modal.setAppElement('#root')

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={{
        base: styles.modal,
        afterOpen: styles.modalAfterOpen,
        beforeClose: styles.modalBeforeClose
      }}
      overlayClassName={{
        base: styles.overlay,
        afterOpen: styles.overlayAfterOpen,
        beforeClose: styles.overlayBeforeClose
      }}
      closeTimeoutMS={300}
      contentLabel='Image Modal'>
      <img src={image.urls.regular} className={styles.img} alt={image.alt_description} />
    </Modal>
  )
}

export default ImageModal
