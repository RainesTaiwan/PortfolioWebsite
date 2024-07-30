 // components/PageHeader.vue
  <template>
    <header>
      <div class="logo">DreamTek</div>
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item">
            <a :href="'#' + item.toLowerCase()">{{ item }}</a>
          </li>
        </ul>
      </nav>
    </header>
  </template>

  <script>
  export default {
    name: 'PageHeader',
    data() {
      return {
        menuItems: ['Home', 'About me', 'My skills', 'Work', 'Contact me']
      }
    }
  }
  </script>

  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #ff6600;
  }
  nav ul {
    list-style-type: none;
    display: flex;
  }
  nav ul li {
    margin-left: 20px;
  }
  nav ul li a {
    color: #ffffff;
    text-decoration: none;
  }
  </style>
