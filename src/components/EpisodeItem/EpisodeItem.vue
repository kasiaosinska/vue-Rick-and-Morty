<template>
  <div class="episode-item">
    <h3 class="episode-item__num">
      Episode {{ episodeData.episodeNumber }}
    </h3>
    <h2 class="episode-item__name">
      {{ episode.name }}
    </h2>
    <span class="episode-item__season-badge">
      Season {{ episodeData.seasonNumber }}
    </span>

    <div class="episode-info" v-if="withExtraData">
      <span class="episode-info__label">Air date</span>
      <span class="episode-info__value">{{ episode.air_date }}</span>
    </div>
  </div>
</template>

<script>

  const getEpisodeData = id => {
    const [season, episode] = id.slice(1).split(/e|E/)
    return {
      seasonNumber: Number(season),
      episodeNumber: Number(episode),
    }
  }

  export default {
    props: {
      episode: {
        type: Object,
        required: true,
      },
      withExtraData: {
        type: Boolean,
      }
    },
    computed: {
      episodeData() {
        if (!this.episode.episode) {
          return {}
        }
        return getEpisodeData(this.episode.episode)
      }
    }
  }
</script>


