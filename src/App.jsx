import { Toaster } from 'react-hot-toast'
import SearchBar from 'components/SearchBar/SearchBar'

const App = () => {
  const onSubmit = (query) => {
    console.log(query)
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Toaster position='top-right' />
    </>
  )
}

export default App
