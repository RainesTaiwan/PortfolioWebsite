// components/SocialIcons.vue
  <template>
    <div class="social-icons">
      <a v-for="icon in icons" :key="icon.name" :href="icon.link" :title="icon.name">
        <i :class="icon.class"></i>
      </a>
    </div>
  </template>

  <script>
  export default {
    name: 'SocialIcons',
    data() {
      return {
        icons: [
          { name: 'Facebook', link: '#', class: 'fab fa-facebook-f' },
          { name: 'Twitter', link: '#', class: 'fab fa-twitter' },
          { name: 'LinkedIn', link: '#', class: 'fab fa-linkedin-in' },
          { name: 'WhatsApp', link: '#', class: 'fab fa-whatsapp' }
        ]
      }
    }
  }
  </script>

  <style scoped>
  .social-icons {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  .social-icons a {
    display: block;
    margin-bottom: 20px;
    color: #ff6600;
    font-size: 24px;
  }
  </style>