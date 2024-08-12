<template>
  <div class="app">
    <PageHeader :lang="currentLang" @language-changed="handleLanguageChange" />
    <MainContent :lang="currentLang" />
    <SocialIcons />
    <PageFooter :lang="currentLang" />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import MainContent from './components/MainContent.vue'
import SocialIcons from './components/SocialIcons.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    MainContent,
    SocialIcons,
    PageFooter
  },
  data() {
    return {
      currentLang: this.getInitialLanguage()
    }
  },
  methods: {
    getInitialLanguage() {
      const savedLang = localStorage.getItem('language')
      if (savedLang && ['zh', 'en'].includes(savedLang)) {
        return savedLang
      }
      const browserLang = navigator.language.split('-')[0]
      return ['zh', 'en'].includes(browserLang) ? browserLang : 'en'
    },
    handleLanguageChange(lang) {
      this.currentLang = lang
      localStorage.setItem('language', lang)
    }
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
