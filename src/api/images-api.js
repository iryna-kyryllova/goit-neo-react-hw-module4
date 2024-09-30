import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com'
axios.defaults.headers.common['Accept-Version'] = 'v1'

export const fetchImages = async (query) => {
  const { data } = await axios('/search/photos', {
    params: {
      client_id: 'grwxOwNpWxADBOh-2dNzdUYrrBPS_Fy8Iza_RuWr9Pk',
      query
    }
  })
  return data
}
