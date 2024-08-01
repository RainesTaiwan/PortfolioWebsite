<template>
  <div class="social-icons">
    <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link" class="icon" target="_blank" rel="noopener noreferrer">
      <i :class="icon.class"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  data() {
    return {
      socialIcons: [
        { name: 'Facebook', link: '#', class: 'fab fa-facebook' },
        { name: 'Twitter', link: '#', class: 'fab fa-twitter' },
        { name: 'LinkedIn', link: '#', class: 'fab fa-linkedin' },
        { name: 'GitHub', link: '#', class: 'fab fa-github' }
      ]
    }
  }
}
</script>

<style scoped>
.social-icons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
}

.icon {
  margin: 5px;
  color: #FFA500;
  font-size: 24px;
  background-color: #1A1A1A;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.icon:hover {
  background-color: #FFA500;
  color: #000000;
}

@media (max-width: 768px) {
  .social-icons {
    flex-direction: row;
    bottom: 10px;
    right: 10px;
  }
}
</style>
