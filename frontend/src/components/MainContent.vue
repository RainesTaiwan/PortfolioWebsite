// components/MainContent.vue
  <template>
    <div class="content">
      <div class="text-content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <a href="#contact" class="cta-button">Contact me</a>
      </div>
      <div class="image-content">
        <img :src="profileImage" alt="Raines Chen" class="profile-image">
      </div>
    </div>
  </template>

  <script>
  import profileImage from '@/assets/main.png'

  export default {
    name: 'MainContent',
    data() {
      return {
        title: "Hi I'm Raines Chen",
        description: "專業程式開發，為您的業務需求量身打造可靠解決方案，讓創新與效率成為您的競爭優勢。\n\nProfessional software development, tailoring reliable solutions to your business needs, turning innovation and efficiency into your competitive edge.",
        profileImage: profileImage
      }
    }
  }
  </script>

  <style scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
  }
  .text-content {
    flex: 1;
  }
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 30px;
    white-space: pre-line;
  }
  .cta-button {
    background-color: #ff6600;
    color: #ffffff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
  }
  .image-content {
    flex: 1;
    text-align: right;
  }
  .profile-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  </style>