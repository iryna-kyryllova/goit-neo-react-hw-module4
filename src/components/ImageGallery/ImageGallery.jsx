import ImageCard from '../ImageCard/ImageCard'
import styles from './ImageGallery.module.css'

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={styles.gallery}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <ImageCard data={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  )
}

export default ImageGallery
