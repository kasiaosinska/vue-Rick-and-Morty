<template>
  <div>
    <h1>Episode</h1>

    <a href="/" class="go-back-link">
      <ArrowBack />
      Search results
    </a>

    <div class="episode__content">
      <div class="episode__left-col">
        <!-- Episode Item with extra info -->
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
        <!-- Comments -->
      </div>
    </div>
  </div>
</template>

<script>

  import ArrowBack from '../assets/icon-arrow-left.svg'
  import EpisodeItem from '../components/EpisodeItem.vue'
  import Characters from '../components/Characters.vue'
  import { fetchEpisode, fetchCharacters } from '../api'

  export default {
    components: { ArrowBack, EpisodeItem, Characters },
    props: [ 'id' ],
    data() {
      return{
        episode: {},
        withExtraData: true,
        charactersId: [],
        characters: [],
      }
    },
    created () {
      this.fetchData()
      this.fetchCharactersData()
    },
    methods: {
      async fetchData() {
        const fetchedEpisodeData = await fetchEpisode(this.id)
        this.episode = fetchedEpisodeData
      },
      async fetchCharactersData() {
        const fetchedCharacterData = await fetchCharacters(this.charactersId)
        this.characters = fetchedCharacterData.results
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
