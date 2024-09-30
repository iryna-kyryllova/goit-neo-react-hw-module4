import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import SearchBar from 'components/SearchBar/SearchBar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import { fetchImages } from 'api/images-api'

const App = () => {
  const [items, setItems] = useState([])

  const handleSearch = async (query) => {
    const data = await fetchImages(query)
    setItems(data.results)
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {items.length > 0 && <ImageGallery items={items} />}
      <Toaster position='top-right' />
    </>
  )
}

export default App
