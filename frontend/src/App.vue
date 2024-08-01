<template>
  <div class="app">
    <PageHeader />
    <MainContent />
    <SocialIcons />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import MainContent from './components/MainContent.vue'
import SocialIcons from './components/SocialIcons.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    MainContent,
    SocialIcons
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #FFA500;
  background-color: #000000;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}

h1, h2, h3, h4, h5, h6 {
  color: #FFA500;
}

@media (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
