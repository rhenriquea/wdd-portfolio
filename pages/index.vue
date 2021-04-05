<template>
  <div>
    <header :class="{ scrolled }" class="header">
      <div class="header--logo">Rafael</div>
      <nav class="header--menu">
        <ul>
          <li class="mobile-only">
            <button @click.prevent="showMobile = !showMobile">
              <i class="material-icons">menu</i>
            </button>
            <div class="dropdown" v-if="showMobile">
              <ul>
                <li>
                  <a href="#" v-scroll-to="'#home'">Home</a>
                </li>
                <li>
                  <a href="#" v-scroll-to="'#about'">About</a>
                </li>
                <li>
                  <a href="#" v-scroll-to="'#portfolio'">Portfolio</a>
                </li>
                <li>
                  <a href="#" v-scroll-to="'#contact'">Contact</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" v-scroll-to="'#home'">Home</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#about'">About</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#portfolio'">Portfolio</a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#contact'">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="home">
        <div class="profile">
          <img src="/images/perfil.jpg" alt="Rafael Henrique de Alneida" />
          <div class="profile-content">
            <h2>Rafael Almeida</h2>
            <h3>B.S Web Design and Development / Software Engineer</h3>
            <ul class="social">
              <li v-for="icon in icons">
                <a :href="icon.url" target="_blank"> <i :class="'mdi ' + `${icon.id}`"> </i></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="about" class="container">
        <h2>About Me</h2>
        <p class="about-description">
          <span class="text-highlight"> Hello, I'm Rafael Almeida</span> a experienced tech
          professional with vast knowledge in Javascript, Typescript, CSS and Pre-Processors (Less,
          Sass, SCSS), HTML, Vue.js and Angular. Currently working with SSR solutions with Nuxt.js
          (Vue.js), managing REST api’s with GraphQL for a Supermarket company. Already worked for
          big companies like KLM – Royal Dutch Airlines and GFT Group. Fluent English, Native
          Portuguese and Basic Dutch.
        </p>
        <div class="download-btn">
          <a href="/rafael_almeida.pdf" download="Rafael Almeida CV"
            >Download CV <i class="mdi mdi-download"></i
          ></a>
        </div>
      </section>
      <section id="portfolio" class="container">
        <h2>Portfolio</h2>
        <div class="portfolio-actions">
          <button
            v-for="item in portfolioButtons"
            @click="select(item.type)"
            :class="{ active: item.type === portfolioType }"
          >
            {{ item.title }}
          </button>
        </div>
        <div v-if="false" class="my-overlay">
          <button>X</button>
          <vueper-slides>
            <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
          </vueper-slides>
        </div>
        <div class="card-grid">
          <div class="img-container" v-for="(project, i) in portfolio">
            <div class="content">
              <div class="content-overlay"></div>
              <img
                :src="project.img"
                width="100%"
                :alt="project.name"
                class="img-content"
                style="width: 100%"
              />
              <div class="content-details fadeIn-top">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
                <a v-if="project.external" :href="project.href">{{ project.name }}</a>
                <div v-else>
                  <router-link :to="project.to" custom v-slot="{ navigate }">
                    <button @click="navigate" @keypress.enter="navigate" role="link">Read</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="container">
        <h2>Contact</h2>
        <div class="contact-box">
          <i class="mdi mdi-email"></i>
          EMAIL
          <span class="text-highlight">rafa.almeida.js@gmail.com</span>
        </div>
        <div class="contact-box">
          <i class="mdi mdi-phone"></i>
          PHONE
          <span class="text-highlight">+310683417049</span>
        </div>
      </section>
    </main>
    <footer>
      <a href="#" v-scroll-to="'#home'" class="to-top"><i class="mdi mdi-arrow-up"></i></a>
      <ul class="social">
        <li v-for="icon in icons">
          <a :href="icon.url" target="_blank"> <i :class="'mdi ' + `${icon.id}`"> </i></a>
        </li>
      </ul>
      <p>
        © Copyright {{ new Date().getFullYear() }}
        <span class="text-highlight"> Rafael Almeida </span>. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    scrolled: false,
    showMobile: false,
    portfolioType: 'all',
    portfolioButtons: [
      { title: 'All Categories', type: 'all' },
      { title: 'Coding', type: 'coding' },
      { title: 'UX & Design', type: 'design' },
      { title: 'Readings', type: 'readings' },
    ],
    portfolio: [],
    links: [
      {
        name: 'Localstorage Stories',
        description:
          'This week we will look an app that is going to allow people to write, save, edit, and show a story they write.',
        to: '/week1',
        type: 'readings',
        img: '/images/placeholders/placeholder-1.jpg',
      },
      {
        name: 'Arrays and Functions',
        description: `A quick overview over Arrays and Functions`,
        to: '/week2',
        type: 'readings',
        img: '/images/placeholders/placeholder-2.jpg',
      },
      {
        name: 'Javascript Objects vs Javascript Classes',
        description: `Although both may look very similar in the implementation, the concept of Classes and Objects in Javascript are very distinct.`,
        to: '/week3',
        type: 'readings',
        img: '/images/placeholders/placeholder-3.jpg',
      },
      {
        name: 'Practical application of Classes and Forms',
        description: `Continuation on Classes and Objects concepts`,
        to: '/week4',
        type: 'readings',
        img: '/images/placeholders/placeholder-4.jpg',
      },
      {
        name: 'Javascript Test Types',
        description: `A quick overview on JS test types`,
        to: '/week5',
        type: 'readings',
        img: '/images/placeholders/placeholder-5.jpg',
      },
      {
        name: 'Week 06: Challenge - ToDo App',
        to: '/week6',
        type: 'readings',
        img: '/images/placeholders/placeholder-6.jpg',
      },
      {
        name: 'Higher-order Functions in Javascript',
        description: `The notes this week is based on a short explanation on closures, callbacks, and how to access an unspecified number of arguments in a higher-order function with the spread operator`,
        to: '/week7',
        type: 'readings',
        img: '/images/placeholders/placeholder-7.jpg',
      },
      {
        name: 'SVG Drawings and CSS Animations',
        description: `On the notes this weeks I have followed some tutorials on how to use SVG and in the end I have created the back of two cards for a deck.
`,
        to: '/week8',
        type: 'readings',
        img: '/images/placeholders/placeholder-8.jpg',
      },
      {
        name: 'HTML 5 APIs',
        description: `The notes this week is based on short demonstrations of HTML5 API's`,
        to: '/week9',
        type: 'readings',
        img: '/images/placeholders/placeholder-9.jpg',
      },
      {
        name: 'MEMES API',
        description: `Application of the fetch concept to retrieve the MEME API information`,
        to: '/week10',
        type: 'readings',
        img: '/images/placeholders/placeholder-10.jpg',
      },
      {
        name: 'Marvel API Integration',
        to: '/',
        type: 'coding',
        external: true,
        href: 'https://marvel-nuxt.vercel.app/',
        img: '/images/placeholders/placeholder-11.jpg',
      },
      {
        name: 'Netflix in Vue.js',
        href: 'https://kccyt.csb.app/',
        external: true,
        type: 'coding',
        img: '/images/placeholders/placeholder-12.jpg',
      },
      {
        name: 'Codepen',
        href: 'https://codepen.io/rhenriquea/',
        external: true,
        type: 'coding',
        img: '/images/placeholders/placeholder-13.jpg',
      },
      {
        name: 'PSA Poster Campaign',
        href: 'https://www.behance.net/gallery/116525753/PSA-Posters-Project-3-ART235',
        external: true,
        type: 'design',
        img: '/images/placeholders/placeholder-14.jpg',
      },
      {
        name: 'Conceptual Book Cover',
        href: 'https://www.behance.net/gallery/114361899/Conceptual-Book-Cover',
        external: true,
        type: 'design',
        img: '/images/placeholders/placeholder-15.jpg',
      },
    ],
    icons: [
      { id: 'mdi-git', url: 'https://github.com/rhenriquea' },
      { id: 'mdi-linkedin', url: 'https://www.linkedin.com/in/rhenriquea/' },
      { id: 'mdi-behance', url: 'https: //www.behance.net/rhenriquea' },
      { id: 'mdi-medium', url: 'https://rhenriquea.medium.com/' },
      { id: 'mdi-twitter', url: 'https://twitter.com/therafahenrique' },
      { id: 'mdi-instagram', url: 'https://www.instagram.com/rafael_alm3ida_/' },
    ],
  }),
  mounted() {
    window.addEventListener('scroll', this.scrollListener);
    this.portfolio = this.links;
  },

  methods: {
    scrollListener() {
      this.scrolled = window.scrollY > 10;
    },
    select(type) {
      this.portfolio = this.links.filter(p => p.type === type);
      this.portfolioType = type;

      if (this.portfolio.length === 0) {
        this.portfolio = this.links;
        this.portfolioType = 'all';
      }
    },
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  background: transparent;
  display: flex;
  height: 70px;
  justify-content: space-between;
  left: 0;
  padding: 0 30px;
  position: fixed;
  right: 0;
  top: 0;
  transition: all ease 0.2s;
  z-index: 9999;

  &.scrolled {
    background: #141414;
  }

  &--logo {
    color: $primary;
    font-family: 'Righteous', cursive;
    font-size: 36px;
    transition: all 0.5s ease 0s;
  }

  &--menu {
    border-radius: 3px;

    button {
      padding: 5px;
    }

    ul {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      margin: 0;
      margin-top: 10px;

      li {
        display: none;
        margin-bottom: 0;
        margin-left: 15px;
        @media only screen and (min-width: 560px) {
          display: block;
        }

        &.mobile-only {
          display: none;
          @media only screen and (max-width: 560px) {
            display: block;
          }
        }

        a {
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
}

.dropdown {
  background-color: $bg-light;
  padding: 15px;
  position: absolute;
  right: 31px;
  right: 32px;

  ul {
    display: block;
    padding: 0;
    li {
      border-bottom: 1px solid;
      display: block;
      margin: 0;
      margin-bottom: 15px;
      padding-bottom: 5px;
      a {
        &:hover {
          color: $primary;
        }
      }
    }
  }
}

#contact,
#about {
  margin: 60px auto;
}

#contact {
  height: 50vh;
}

section {
  h2 {
    color: #fff;
    font-family: 'Righteous', cursive;
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    position: relative;
    text-align: center;

    &::before {
      border-bottom: 1px solid $primary;
      bottom: 8px;
      content: '';
      display: table;
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
      width: 80px;
    }

    &::after {
      border-bottom: 1px solid $primary;
      bottom: 0;
      content: '';
      display: table;
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
      width: 40px;
    }
  }
}

#home {
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  position: relative;
  width: 100%;

  &::after {
    background-image: url('/images/hero.jpeg');
    background-size: cover;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.15;
    position: absolute;
    right: 0;
    top: 0;
  }
}
.text-highlight {
  color: $primary;
  font-weight: 500;
}

#contact {
  text-align: center;
}

.profile {
  background: #252b2e;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 450px;
  position: absolute;
  text-align: center;
  z-index: 3;

  @media only screen and (max-width: 560px) {
    margin-top: 200px;
  }

  h2 {
    font-family: 'Righteous', cursive;
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
  }
  h3 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
  }
  img {
    border: 12px solid $primary;
    border-radius: 50%;
    position: relative;
    top: -85px;
    width: 150px;
  }

  &-content {
    margin-top: -85px;
    padding: 20px;
  }
}

.social {
  display: table;
  list-style: none;
  margin: 15px auto;
  padding: 0;

  li {
    display: inline-block;
    margin: 5px;
    a {
      border: 1px solid #fff;
      border-radius: 100%;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: block;
      font: inherit;
      font-size: 20px;
      height: 42px;
      line-height: 42px;
      margin: 0;
      padding: 0;
      text-align: center;
      transition: all 0.5s ease 0s;
      vertical-align: baseline;
      width: 42px;

      &:hover {
        background: $primary;
        border-color: $primary;
        box-shadow: none;
        text-decoration: none;
      }
    }
  }
}

.about-description {
  padding: 0 20px;
}

.card-grid {
  padding: 20px;
  img {
    width: 100%;

    &:hover {
      &::before {
        background: #cece;
        content: '';
        height: auto;
        width: 100%;
      }
    }
  }
}

.portfolio-actions {
  margin-bottom: 1em;
  text-align: center;

  button {
    margin: 5px;
    width: 150px;

    @media only screen and (max-width: 560px) {
      width: 135px;
    }

    &.active,
    &:hover {
      background: $primary;
      border-color: $primary;
    }
  }
}

.img-container .title {
  color: #1a1a1a;
  margin-bottom: 10px;
  text-align: center;
}

.content {
  margin: auto;
  overflow: hidden;
  position: relative;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  height: 99%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  width: 100%;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
}

.content-details {
  left: 50%;
  opacity: 0;
  padding-left: 1em;
  padding-right: 1em;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 100%;
}

.content:hover .content-details {
  left: 50%;
  opacity: 1;
  top: 50%;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-top {
  top: 20%;
}

.my-overlay {
  background: $bg-light;
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10;
}

.contact-box {
  background: $bg-light;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  margin: 0 10px;
  margin-bottom: 25px;
  padding: 12px 10px;
  text-align: center;
  transition: all 0.8s ease 0s;
  width: 195px;
}

.download-btn {
  border: 1px solid $primary;
  margin: 0 auto;
  margin-top: 30px;
  padding: 15px 10px;
  text-align: center;
  width: 150px;
}

footer {
  background-color: $bg-light;
  padding-bottom: 30px;
  position: relative;
  text-align: center;

  a.to-top {
    background: $primary;
    border: 1px solid $primary;
    border-radius: 100%;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 5px 10px;
    position: relative;
    top: -10px;
  }
  p {
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 24px;
  }
}
</style>
