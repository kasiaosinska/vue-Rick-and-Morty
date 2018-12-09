<template>
  <header class="header">
    <a href="/" class="header__logo">
      <Logo />
    </a>

    <button class="header__nav-trigger" v-on:click="isVisible = !isVisible">  <!-- @click -->
      <HamburgerOpen v-if="!isVisible"/>
      <HamburgerClose v-else/>
    </button>

    <nav class="header__nav" v-bind:class="{'is-visible': isVisible}">
      <router-link class="header__nav-link" to="/">Episodes</router-link>
      <router-link class="header__nav-link" to="/quiz">Quiz</router-link>
    </nav>
  </header>
</template>

<script>
  import Logo from '../assets/logo.svg'
  import HamburgerOpen from '../assets/icon-menu.svg'
  import HamburgerClose from '../assets/icon-close.svg'
  export default {
    components: { Logo, HamburgerOpen, HamburgerClose },
    data() {
      return {
        isVisible: true,
      }
    }
  }

</script>


