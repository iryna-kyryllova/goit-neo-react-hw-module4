import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import SearchBar from 'components/SearchBar/SearchBar'
import ImageGallery from 'components/ImageGallery/ImageGallery'

const App = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Title1' },
    { id: 2, title: 'Title2' },
    { id: 3, title: 'Title3' },
    { id: 4, title: 'Title4' },
    { id: 5, title: 'Title5' }
  ])

  const onSubmit = (query) => {
    console.log(query)
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {items.length > 0 && <ImageGallery items={items} />}
      <Toaster position='top-right' />
    </>
  )
}

export default App
