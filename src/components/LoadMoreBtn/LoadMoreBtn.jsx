import styles from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={styles.holder}>
      <button type='button' onClick={onLoadMore}>
        Load more
      </button>
    </div>
  )
}

export default LoadMoreBtn
