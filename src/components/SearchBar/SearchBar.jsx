import toast from 'react-hot-toast'
import { IoSearchOutline } from 'react-icons/io5'
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
            <IoSearchOutline className={styles.icon} />
          </button>
        </form>
      </div>
    </header>
  )
}

export default SearchBar
