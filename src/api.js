import { baseUrl } from './constant'

export const fetchEpisodes = (page = 1, name = '') => {
  return (
    fetch(`${baseUrl}episode?page=${page}&name=${name}`)
    .then(response => response.json())
  )
}

