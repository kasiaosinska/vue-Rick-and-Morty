<template>
  <div>
    <h1 class="episodes__title">Episodes</h1>

    <div class="episodes__search">
      <SearchIcon />
      <input type="text" placeholder="Search" @input="searchByName($event.target.value)">
    </div>

    <ul class="episodes__list">
      <li v-for="episode in episodes" :key="episode.id">
        <EpisodeItem :episode="episode" />
      </li>
      <!-- ... -->
    </ul>

    <div class="episodes__loader" v-infinite-scroll="fetchData" infinite-scroll-disabled="checkIfLastPage">
      Loading more
    </div>
  </div>
</template>


<script>
  import SearchIcon from '../assets/icon-search.svg'
  import EpisodeItem from '../components/EpisodeItem.vue'
  import debounce from 'lodash.debounce'
  import { fetchEpisodes } from '../api'

  export default {
    components: { SearchIcon, EpisodeItem },
    data() {
      return {
        episodes: [],
        page: 0,
        pageCount: 0,
        name: '',
        isLoading: true,
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        this.page = this.page + 1
        const fetchedData = await fetchEpisodes(this.page, this.name)
        this.pageCount = fetchedData.info.pages
        this.episodes = [...this.episodes , ...fetchedData.results]
        this.isLoading = false
      },

      searchByName: debounce(function(value) {
        this.name = value
        this.fetchData()
      }, 1000),
    },
    computed: {
      checkIfLastPage() {
        return this.isLoading || this.page === this.pageCount
      }
    }
  }

</script>
