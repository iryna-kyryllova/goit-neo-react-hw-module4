import ReactModal from 'react-modal'
import styles from './ImageModal.module.css'

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={300}
      preventScroll={true}
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
      contentLabel={'Image Modal'}>
      <img src={image.urls.regular} className={styles.img} alt={image.alt_description} />
    </ReactModal>
  )
}

export default ImageModal
