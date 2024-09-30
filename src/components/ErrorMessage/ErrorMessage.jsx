import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={styles.message}>
      <div className='container'>Something went wrong...</div>
    </div>
  )
}

export default ErrorMessage
