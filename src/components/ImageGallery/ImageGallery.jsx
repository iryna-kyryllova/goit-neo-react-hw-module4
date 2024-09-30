import ImageCard from '../ImageCard/ImageCard'
import styles from './ImageGallery.module.css'

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  )
}

export default ImageGallery
