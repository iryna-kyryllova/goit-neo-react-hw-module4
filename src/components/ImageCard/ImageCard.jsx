import { FcLike } from 'react-icons/fc'
import styles from './ImageCard.module.css'

const ImageCard = ({ data }) => {
  const { likes, user } = data
  // data.urls.regular for modal
  return (
    <div className={styles.card}>
      <img src={data.urls.small} className={styles.img} alt={data.alt_description} />
      <div className={styles.info}>
        {likes && (
          <p>
            <FcLike />
            <span className={styles.likes}>{likes}</span>
          </p>
        )}
        {user.name && (
          <p>
            <span>Author: </span>
            <strong>{user.name}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

export default ImageCard
