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
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="container">
        <br>
        <h2>My Projects</h2>
        <div class="project-grid">
          <div class="project">Project 1</div>
          <div class="project">Project 2</div>
          <div class="project">Project 3</div>
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
      message: ''
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

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.project {
  background: #1A1A1A;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(255, 165, 0, 0.1);
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
}
</style>
