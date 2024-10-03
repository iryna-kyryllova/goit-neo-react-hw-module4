import axios from 'axios'

export const PER_PAGE = 12

axios.defaults.baseURL = 'https://api.unsplash.com'
axios.defaults.headers.common['Accept-Version'] = 'v1'

export const fetchImages = async (query, page) => {
  const { data } = await axios('/search/photos', {
    params: {
      client_id: 'grwxOwNpWxADBOh-2dNzdUYrrBPS_Fy8Iza_RuWr9Pk',
      query,
      page,
      per_page: PER_PAGE
    }
  })
  return data
}
