<template>
  <div>
    <h1>Episode</h1>

    <a href="/" class="go-back-link">
      <ArrowBack />
      Search results
    </a>

    <div class="episode__content">
      <div class="episode__left-col">
        <EpisodeItem :episode="episode" :withExtraData="withExtraData" />
        <h2>Characters</h2>
        <ul class="characters-list">
          <li v-for="character in characters" :key="character.id">
            <Characters :character="character"/>
          </li>
        </ul>
          <div class="link-container">
            <button class="primary-link is-big">
              Show more
            </button>
          </div>
      </div>

      <div class="episode__right-col">
        <h2>Comments</h2>
        <Comments :comments="comments" @postComment="postComment"/>
      </div>
    </div>
  </div>
</template>

<script>

  import ArrowBack from '../assets/icon-arrow-left.svg'
  import EpisodeItem from '../components/EpisodeItem/EpisodeItem.vue'
  import Characters from '../components/Characters.vue'
  import Comments from '../components/Comments.vue'
  import { fetchEpisode, fetchCharacters, fetchEpisodeComments, postComment } from '../api'

  export default {
    components: { ArrowBack, EpisodeItem, Characters, Comments },
    data() {
      return{
        episode: {},
        withExtraData: true,
        charactersId: [],
        characters: [],
        comments: []
      }
    },
    created () {
      this.fetchData()
      this.fetchCharactersData()
      this.fetchCommentsData()
    },
    methods: {
      async fetchData() {
        this.episode = await fetchEpisode(this.id)
      },
      async fetchCharactersData() {
        const fetchedCharacterData = await fetchCharacters(this.charactersId)
        this.characters = fetchedCharacterData.results
      },
      async fetchCommentsData() {
        const fetchedCharacterData = await fetchEpisodeComments(this.id)
        this.comments = fetchedCharacterData.results
      },
      async postComment(params) {
        const addedComment = await postComment(this.id, params.commentText, params.userName)
        this.comments = [addedComment, ...this.comments]
      }
    },
    computed: {
      getCharactersId() {
        const array = []
        this.episode.characters.map(item => {
          array.push(item.slice(42))
        })
        return this.charactersId = array
      }
    }
  }

</script>
