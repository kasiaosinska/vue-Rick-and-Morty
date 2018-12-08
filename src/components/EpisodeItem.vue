<template>
  <div class="episode-item">
    <h3 class="episode-item__num">
      Episode {{ episode.id }}
    </h3>
    <h2 class="episode-item__name">
      {{ episode.name }}
    </h2>
    <span class="episode-item__season-badge">
      Season {{ seasonNumber }}
    </span>

    <!-- optional info -->
    <!--<div class="episode-info">-->
      <!--<span class="episode-info__label">Air date</span>-->
      <!--<span class="episode-info__value" v-bind:air_date="episode.air_date">December 2, 2013</span>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    props: {
      episode: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        seasonNumber: Number(this.episode.episode.substr(1, 2)),
      }
    },
  }
</script>


