<template>
  <main class="main-content">
    <section id="home" class="section">
      <div class="container">
        <br>
        <h1>Hi I'm Raines.</h1>
        <p>Professional software development, tailoring reliable solutions to your business needs, turning innovation and efficiency into your competitive edge.</p>
        <div class="image-container">
          <img :src="profileImage" alt="Raines" class="profile-pic">
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <br>
        <h2>About Me</h2>
        <p>I am a seasoned full-stack developer and project management expert, specializing in the development, integration, and optimization of automation systems. Over the past 6 years, I have been deeply involved in system transformation projects for large enterprises, covering all stages from system selection and development to implementation and maintenance.</p>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="container">
        <br>
        <h2>My Skills</h2>
        <div class="wrapper">
          <div v-for="(skill, index) in skills" :key="index" class="item">
            <div class="top">{{ String(index + 1).padStart(2, '0') }} &lt;{{ skill.tag }}/&gt;</div>
            <video autoplay loop playsinline class="video">
              <source :src="skill.videoSrc" type="video/mp4">
            </video>
            <div class="title">{{ skill.title }}</div>
            <div class="content">{{ skill.content }}</div>
            <a v-if="skill.link" :href="skill.link.url" target="_blank">
              <button type="button" class="link-btn">
                <span><span>{{ skill.link.text }}</span></span>
                <span class="icon material-symbols-outlined">arrow_forward</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="container">
        <br>
        <h2>My Projects</h2>
        <div class="wrapper">
          <div v-for="(project, index) in projects" :key="index" class="item">
            <div class="top">{{ String(index + 1).padStart(2, '0') }} &lt;{{ project.tag }}/&gt;</div>
            <video autoplay loop playsinline class="video">
              <source :src="project.videoSrc" type="video/mp4">
            </video>
            <div class="title">{{ project.title }}</div>
            <div class="content">{{ project.content }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <br>
        <h2>Contact Me</h2>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="name" placeholder="Name" required>
          <input type="email" v-model="email" placeholder="Email" required>
          <textarea v-model="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MainContent',
  data() {
    return {
      profileImage: null,
      name: '',
      email: '',
      message: '',
      skills: [
        {
          tag: 'DISCOVER',
          videoSrc: '/images/01.mp4',
          title: '📁 探索創意點子',
          content: '發揮你的想像力，提出與市政相關之創意方案。可將臺北市資料大平台、政府資料開放平臺以及台北通微服務基礎做為開發參考，以增進數位公共服務為目標，碰撞出不同點子想法。',
          link: {
            url: 'https://data.taipei/',
            text: 'Data.taipei'
          }
        },
        {
          tag: 'MICROSERVICE',
          videoSrc: '/images/02.mp4',
          title: '🔍 城市通微服務',
          content: '運用微服務的優勢，將數位服務組件化，以此提升並完善市政數位服務，增進其彈性與相容程度，來翻轉城市美學。主辦單位會在工作坊詳細說明主題內容。'
        },
        {
          tag: 'OPENSOURCE',
          videoSrc: '/images/03.mp4',
          title: '🧑‍💻 開源精神無所不在',
          content: '不限制資料來源，以開放資料為主，並請備註引用來源，若涉及個資需去識別化。僅限使用開源軟體進行開發，禁用相關商用軟體，違反規定將取消參賽資格。'
        }
      ],
      projects: [
        {
          tag: 'DEVELOPMENT',
          videoSrc: '/images/04.mp4',
          title: '💥 開發與建置',
          content: '將團隊的點子想法實做出來，成果需使用在手機上。Flutter開發，並需具備前端(HTML、CSS、JavaScript)、後端(Java)技術能力，可能會使用到Git、Docker、Postman開發工具。'
        },
        {
          tag: 'SHOWCASE',
          videoSrc: '/images/05.mp4',
          title: '🙌 現場展示',
          content: '向所有參賽隊伍及評審委員展示團隊的開發成果，且不得使用形式之簡報呈現。透過展示與實際操作，向大家傳達設計微服務的概念想法。'
        }
      ]
    }
  },
  mounted() {
    import('@/assets/main.png')
      .then(module => {
        this.profileImage = module.default
      })
      .catch(error => {
        console.error('Error loading profile image:', error)
        this.profileImage = 'https://via.placeholder.com/400x300?text=Profile+Image+Not+Found'
      })
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', { name: this.name, email: this.email, message: this.message })
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.section p {
  font-size: 28px;
}

.section h1 {
  font-size: 36px;
}

.section h2 {
  font-size: 36px;
}

.section {
  padding: 4rem 0;
}

.section:nth-child(even) {
  background-color: #1A1A1A;
}

.image-container {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
}

.profile-pic {
  width: 100%;
  height: auto;
  object-fit: cover;
  border: 5px solid #FFA500;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: calc(33.33% - 20px);
  margin-bottom: 40px;
  background-color: #1A1A1A;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(255, 165, 0, 0.1);
}

.top {
  background-color: #FFA500;
  color: #000000;
  padding: 10px;
  font-weight: bold;
}

.video {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.title {
  font-size: 24px;
  font-weight: bold;
  padding: 15px;
  color: #FFA500;
}

.content {
  padding: 0 15px 15px;
  color: #FFA500;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  background-color: #FFA500;
  color: #000000;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px;
  transition: background-color 0.3s ease;
}

.link-btn:hover {
  background-color: #FF8C00;
}

.icon {
  margin-left: 5px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}

input, textarea {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #FFA500;
  border-radius: 4px;
  background-color: #1A1A1A;
  color: #FFA500;
}

button {
  padding: 0.5rem;
  background-color: #FFA500;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #FF8C00;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 0;
  }

  .image-container {
    max-width: 300px;
  }

  .item {
    width: 100%;
  }
}
</style>
