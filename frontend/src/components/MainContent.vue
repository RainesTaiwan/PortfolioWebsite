<template>
  <main class="main-content">
    <section id="home" class="section">
      <div class="container">
        <h1>{{ translations[lang].homeMe }}</h1>
        <p>{{ translations[lang].homeMeContent }}</p>
        <div class="image-container">
          <img
            :src="profileImage"
            alt="Raines"
            class="profile-pic"
            @error="handleImageError"
          >
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <h2>{{ translations[lang].aboutMe }}</h2>
        <p>{{ translations[lang].aboutMeContent }}</p>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="container">
        <h2>My Skills</h2>
        <div class="wrapper">
          <div v-for="(skill, index) in skills" :key="index" class="item">
            <div class="top">{{ String(index + 1).padStart(2, '0') }} &lt;{{ skill.tag }}/&gt;</div>
            <template v-if="skill.type === 'video'">
              <video autoplay loop playsinline class="media">
                <source :src="skill.src" type="video/mp4">
              </video>
            </template>
            <template v-else-if="skill.type === 'image'">
              <img
                :src="skill.src"
                :alt="skill.title"
                class="media"
                @error="handleImageError"
              >
            </template>
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
        <h2>My Projects</h2>
        <div class="wrapper">
          <div v-for="(project, index) in projects" :key="index" class="item">
            <div class="top">{{ String(index + 1).padStart(2, '0') }} &lt;{{ project.tag }}/&gt;</div>
            <template v-if="project.type === 'video'">
              <video autoplay loop playsinline class="media">
                <source :src="project.src" type="video/mp4">
              </video>
            </template>
            <template v-else-if="project.type === 'image'">
              <img
                :src="project.src"
                :alt="project.title"
                class="media"
                @error="handleImageError"
              >
            </template>
            <div class="title">{{ project.title }}</div>
            <div class="content">{{ project.content }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me at:
          <a href="mailto:raines.taiwan@gmail.com" class="email-link">
            raines.taiwan@gmail.com
          </a>
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import translations from '@/locales/translations.js'

export default {
  name: 'MainContent',
  props: ['lang'],
  data() {
    return {
      translations: translations,
      profileImage: null,
      placeholderImage: require('@/assets/placeholder.png'),
      projects: [
        {
          tag: 'WMS',
          src: '/assets/WMS1-1.png',
          type: 'image',
          title: '📦 Warehouse Management System',
          content: 'I have developed backend API services using the ASP.NET MVC framework to integrate ERP (Enterprise Resource Planning) systems with WMS (Warehouse Management Systems). I provide API services for WMS to drive subsystems such as AGVs (Automated Guided Vehicles). Additionally, I offer comprehensive WMS solutions to clients, catering to various warehouse management needs.'
        },
        {
          tag: 'PMRS',
          src: '/assets/PRMS1-1.png',
          type: 'image',
          title: '📊 Project Management and Reporting System',
          content: 'I am proficient in developing Project Management and Reporting Systems using Node.js, Express, and the MERN (MongoDB, Express, React, Node.js) stack. I have successfully integrated Amazon EC2 and S3 solutions to deliver efficient project management and reporting services to clients.'
        },
        {
          tag: 'STS',
          src: '/assets/STS1-1.png',
          type: 'image',
          title: '🧪 Specimen Tracking System',
          content: 'I have developed a Specimen Tracking System using a decoupled architecture, with Vue 3 as the front-end framework, ASP.NET as the back-end technology, and Microsoft SQL Server as the database management system. The back-end server provides RESTful APIs for seamless integration with the front-end application. This system offers clients a comprehensive solution for specimen tracking and reporting, enhancing laboratory workflow efficiency and data management.'
        },
      ],
      skills: [
        {
          tag: 'Web Development',
          src: '/assets/WEB1-1.png',
          type: 'image',
          title: '🌐 Frontend、Backend、SQL',
          content: ' HTML/CSS、API \n JavaScript、Python、C# \n React、Django、ASP.NET \n SSRS、PowerBi、Git',
          link: {
            url: 'https://github.com/RainesTaiwan',
            text: 'github'
          }
        },
        {
          tag: 'Cloud Computing',
          src: '/assets/elastic1-1.png',
          type: 'image',
          title: '☁️ AWS、Azure、Docker',
          content: ' Elasticsearch、Prometheus、Grafana、Lens、yaml、GitlabCI/CD \n MySQL、PostgreSQL、Microsoft SQL Server、MongoDB \n EC2、S3、App Service'
        },
        {
          tag: 'Industrial Automation',
          src: '/assets/CAPS1-1.png',
          type: 'image',
          title: '🏭 CAPS、SORTER',
          content: ' Electronic Label Solution \n Automatic Sorting Machine Solution \n Automatic Labeling Machine Solution \n Automatic Weighing Machine Solution \n AGV Solution'
        }
      ],
    }
  },
  mounted() {
    this.loadProfileImage()
  },
  methods: {
    loadProfileImage() {
      import('@/assets/main.png')
        .then(module => {
          this.profileImage = module.default
        })
        .catch(error => {
          console.error('Error loading profile image:', error)
          this.handleImageError()
        })
    },
    handleImageError(event) {
      // 如果是 event 對象，則表示是由 img 標籤觸發的錯誤
      if (event && event.target) {
        event.target.src = this.placeholderImage
      } else {
        // 如果不是 event 對象，則是 profile 圖片加載失敗
        this.profileImage = this.placeholderImage
      }
    }
  }
}
</script>

<style scoped>
.section p {
  font-size: 18px;
}

.section h1 {
  font-size: 32px;
}

.section h2 {
  font-size: 28px;
}

.section {
  padding: 3rem 0;
}

.section:nth-child(even) {
  background-color: #1A1A1A;
}

.image-container {
  width: 100%;
  max-width: 600px;
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

.media {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.title {
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #FFA500;
}

.content {
  padding: 0 15px 15px;
  color: #FFA500;
  white-space: pre-wrap;
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

.email-link {
  color: #FFA500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: #FF8C00;
  text-decoration: underline;
}

/* 響應式設計改進 */
@media (max-width: 1200px) {
  .item {
    width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 0;
  }

  .section p {
    font-size: 16px;
  }

  .section h1 {
    font-size: 28px;
  }

  .section h2 {
    font-size: 24px;
  }

  .image-container {
    max-width: 300px;
  }

  .item {
    width: 100%;
  }

  .title {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .section p {
    font-size: 14px;
  }

  .section h1 {
    font-size: 24px;
  }

  .section h2 {
    font-size: 20px;
  }

  .image-container {
    max-width: 250px;
  }
}
</style>