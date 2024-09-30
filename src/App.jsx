import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import SearchBar from 'components/SearchBar/SearchBar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { fetchImages } from 'api/images-api'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSearch = async (query) => {
    try {
      setIsError(false)
      setIsLoading(true)
      const { results } = await fetchImages(query)
      if (!results.length) {
        toast('No images found. Please try again')
        return
      }
      setItems(results)
    } catch (error) {
      console.error('Error:', error)
      setIsError(true)
      setItems([])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isError && <ErrorMessage />}
      {items.length > 0 && <ImageGallery items={items} />}
      {isLoading && <Loader />}
      <Toaster position='top-right' />
    </>
  )
}

export default App
