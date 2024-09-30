import toast from 'react-hot-toast'
import styles from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchQuery = e.target.elements.search.value.trim()
    if (!searchQuery) {
      toast.error('Please type something to search for images')
      return
    }
    onSubmit(searchQuery)
  }

  return (
    <header className={styles.header}>
      <div className='container'>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type='text'
            className={styles.input}
            name='search'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
          <button type='submit' className={styles.btn}>
            <svg
              width='23'
              height='23'
              viewBox='0 0 23 23'
              className={styles.icon}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.7492 15.2754C18.0327 13.6708 18.8002 11.6355 18.8002 9.42093C18.8002 4.2409 14.6009 0.0416565 9.42094 0.0416565C4.24091 0.0416565 0.0416679 4.2409 0.0416679 9.42093C0.0416679 14.6009 4.24091 18.8002 9.42094 18.8002C11.6355 18.8002 13.6708 18.0327 15.2754 16.7492L21.1793 22.6531C21.5863 23.0601 22.2461 23.0601 22.6531 22.6531C23.0601 22.2461 23.0601 21.5862 22.6531 21.1793L16.7492 15.2754ZM9.42094 16.7263C5.38625 16.7263 2.11549 13.4556 2.11549 9.42093C2.11549 5.38624 5.38625 2.11548 9.42094 2.11548C13.4556 2.11548 16.7264 5.38624 16.7264 9.42093C16.7264 13.4556 13.4556 16.7263 9.42094 16.7263Z'
                fill='#0c0b0b'
              />
            </svg>
          </button>
        </form>
      </div>
    </header>
  )
}

export default SearchBar
