import { FcLike } from 'react-icons/fc'
import styles from './ImageCard.module.css'

const ImageCard = ({ data, openModal }) => {
  const { likes, user, urls, alt_description } = data

  const handleImageClick = () => {
    openModal({ urls, alt_description })
  }

  return (
    <div className={styles.card} onClick={handleImageClick} tabIndex='0'>
      <img src={urls.small} className={styles.img} alt={alt_description} />
      <div className={styles.info}>
        {likes >= 0 && (
          <p>
            <FcLike />
            <span className={styles.likes}>{likes}</span>
          </p>
        )}
        {user.name && (
          <p className={styles.author}>
            <span>Author: </span>
            <strong>{user.name}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

export default ImageCard
