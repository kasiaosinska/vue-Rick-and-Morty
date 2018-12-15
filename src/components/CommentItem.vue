<template>
  <div class="base-item">
    <header class="base-item__header">
      <div class="base-item__header-content">
        <h3 class="base-item__title">{{ comment.author }}</h3>
        <span class="base-item__subtitle">{{ getDate }}</span>
      </div>
    </header>

    <p class="base-item__content">
      {{ comment.content }}
    </p>
  </div>
</template>

<script>

  import moment from 'moment'

  const parseDate = date => {
    return moment(date, "YYYY-MM-DDTHH:mm:ss.SSS").fromNow();
  }

  export default {
    props: {
      comment: {
        type: Object,
        required: true,
      }
    },
    computed: {
      getDate() {
        return parseDate(this.comment.created)
      }
    }
  }
</script>
