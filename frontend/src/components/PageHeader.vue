<template>
  <header class="header">
    <div class="container">
      <nav>
        <div class="logo">
          <img :src="logoImage" alt="Logo" />
        </div>
        <ul class="nav-menu" :class="{ 'active': isMenuActive }">
          <li v-for="item in menuItems" :key="item.id">
            <a :href="'#' + item.id" @click="scrollToSection(item.id)">{{ item.name }}</a>
          </li>
        </ul>
        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      menuItems: [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact' }
      ],
      isMenuActive: false,
      logoImage: null
    }
  },
  mounted() {
    import('@/assets/logo.png')
      .then(module => {
        this.logoImage = module.default
      })
      .catch(error => {
        console.error('Error loading logo image:', error)
        this.logoImage = 'https://via.placeholder.com/50x50?text=Logo'
      })
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    scrollToSection(id) {
      this.isMenuActive = false;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
.header {
  background: #1A1A1A;
  color: #FFA500;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(255, 165, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px;
}

.nav-menu {
  display: flex;
  list-style: none;
}

.nav-menu li {
  padding: 0 1rem;
}

.nav-menu a {
  color: #FFA500;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #FF8C00;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background: #FFA500;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: #1A1A1A;
    width: 100%;
    text-align: center;
    transition: 0.3s;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu li {
    padding: 1rem 0;
  }

  .hamburger {
    display: block;
  }
}
</style>
