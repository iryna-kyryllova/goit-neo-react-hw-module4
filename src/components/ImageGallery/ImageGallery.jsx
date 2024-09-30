import ImageCard from '../ImageCard/ImageCard'
import styles from './ImageGallery.module.css'

const ImageGallery = ({ items }) => {
  return (
    <section className={styles.section}>
      <div className='container'>
        <ul className={styles.gallery}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <ImageCard data={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ImageGallery
