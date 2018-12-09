import { baseUrl } from './constant'

export const fetchEpisodes = (page = 1, name = '') => {
  return (
    fetch(`${baseUrl}episode?page=${page}&name=${name}`)
    .then(response => response.json())
  )
}

export const fetchEpisode = ( id = 1 ) => {
  return (
    fetch(`${baseUrl}episode/${id}`)
      .then(response => response.json())
  )
}

export const fetchCharacters = ( id = '') => {
  return (
    fetch(`${baseUrl}character/${id}`)
      .then(response => response.json())
  )
}
