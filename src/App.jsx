import { useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import SearchBar from 'components/SearchBar/SearchBar'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import Loader from 'components/Loader/Loader'
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from 'components/ImageModal/ImageModal'
import { fetchImages } from 'api/images-api'

const App = () => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const totalPages = useRef()

  useEffect(() => {
    if (!query) return
    const getImages = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const { results, total_pages } = await fetchImages(query, page)
        if (!results.length) {
          toast('No images found. Please try again')
          return
        }
        setItems((prevItems) => [...prevItems, ...results])
        totalPages.current = total_pages
      } catch (error) {
        console.error('Error:', error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getImages()
  }, [query, page])

  const handleSearch = (query) => {
    setItems([])
    setQuery(query)
    setPage(1)
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  const openModal = (image) => {
    setModalIsOpen(true)
    setSelectedImage(image)
  }

  function closeModal() {
    setModalIsOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <div className='app-container container'>
        {isError ? (
          <ErrorMessage />
        ) : (
          items.length > 0 && <ImageGallery items={items} openModal={openModal} />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          items.length > 0 &&
          totalPages.current > page && <LoadMoreBtn onLoadMore={handleLoadMore} />
        )}
      </div>
      {modalIsOpen && (
        <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} image={selectedImage} />
      )}
      <Toaster position='top-right' />
    </>
  )
}

export default App
