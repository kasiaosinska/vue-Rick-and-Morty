import { baseUrl, baseCommentsUrl } from './constant'

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

export const fetchEpisodeComments = ( id = 1 ) => {
  return (
    fetch(`${baseCommentsUrl}episode/${id}/comments`)
      .then(response => response.json())
  )
}

export const postComment = ( id = 1, commentText = '', userName = '' ) => {
  return (
    fetch(`${baseCommentsUrl}episode/${id}/comments`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: commentText,
        author: userName
      })
    })
      .then(response => response.json())
  )
}
