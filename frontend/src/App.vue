// App.vue
  <template>
    <div class="container">
      <PageHeader />
      <MainContent />
    </div>
    <SocialIcons />
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
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;
    color: #ffffff;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>