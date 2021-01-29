<template>
  <main v-if="examples">
    <h1>Practical application of Classes and Forms</h1>
    <div ref="editor1" class="editor"></div>

    <h2>{{ examples[0].title }}</h2>
    <p>{{ examples[0].description }}</p>

    <p>Consider the following JS class:</p>
    <nuxt-content :document="examples[0]" />

    <p>Using the class above let's create a form to add a company to an array of companies.</p>

    <div class="row">
      <div class="col">
        <h3>Add a Company</h3>
        <form @submit.prevent="addCompany">
          <label for="name">Company Name</label>
          <input type="text" id="name" v-model="name" />
          <label for="streetName">Street Name</label>
          <input type="text" id="streetName" v-model="streetName" />
          <label for="streetNumber">Street Number</label>
          <input type="text" id="streetNumber" v-model="streetNumber" />
          <label for="zipCode">Street Code</label>
          <input type="text" id="zipCode" v-model="zipCode" />
          <button type="submit" class="mt">Add</button>
        </form>
      </div>

      <ul class="companies-list unstyled">
        <li v-for="company in companies" class="m">
          <div class="cover" :style="{ backgroundImage: `url(${company.image})` }"></div>

          <div class="px">
            <h3 class="mt">{{ company.name }}</h3>
            <small>{{ company.streetName }} {{ company.streetNumber }} {{ company.zipCode }}</small>

            <hr />
            <div class="text-center" v-if="company.employers.length > 0">
              <ul class="employers-list unstyled">
                <li v-for="employee in company.employers">
                  <figure>
                    <img :src="employee.avatar" :alt="employee.name" class="mr" />
                    <figcaption>{{ employee.name }}</figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="snackbar" :class="{ show: sent }">Company successfully added!</div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const examples = await $content('week4').fetch();
    return {
      examples,
    };
  },
  data: () => ({
    companies: [
      {
        id: 1,
        name: 'Denesik Group',
        image: 'http://placeimg.com/640/480/business',
        employers: [
          {
            id: 1,
            avatar: 'https://i.pravatar.cc/128?img=33',
            name: 'Jillian OHara',
          },
        ],
        streetName: 'Lexi Garden',
        streetNumber: 300,
        zipCode: '74906-3144',
      },
      {
        id: 2,
        name: 'Wisozk, Goodwin and Towne',
        image: 'http://placeimg.com/640/480',
        employers: [
          {
            id: 2,
            avatar: 'https://i.pravatar.cc/128?img=53',
            name: 'Dudley Dibbert',
          },
        ],
        streetName: 'Kristian Crossing',
        streetNumber: '13a',
        zipCode: '68696',
      },
    ],
    name: null,
    streetName: null,
    streetNumber: null,
    zipCode: null,
    sent: false,
  }),
  methods: {
    addCompany() {
      const { name, streetName, streetNumber, zipCode } = this;

      const newCompany = {
        id: this.companies[this.companies.length - 1].id + 1,
        employers: [],
        image: 'http://placeimg.com/640/480/technics',
        name,
        streetName,
        streetNumber,
        zipCode,
      };

      this.companies.push(newCompany);

      this.sent = true;

      setInterval(() => {
        this.sent = false;
      }, 3000);

      this.clearFields();
    },
    clearFields() {
      this.name = null;
      this.streetName = null;
      this.streetNumber = null;
      this.zipCode = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.unstyled {
  list-style: none;
}

.text-center {
  text-align: center;
}

h6 {
  margin-bottom: 5px;
}

figure {
  margin: 0;
  padding: 0;

  figcaption {
    font-size: 10px;
  }
}

.row {
  display: flex;
}

.col {
  padding: 0 15px;
  width: 50%;
}

form {
  display: flex;
  flex-direction: column;
}

.companies-list {
  li {
    border: 1px solid #bebebe;
    border-radius: 5px;
    display: flex;
    height: 150px;
    overflow: hidden;
    .cover {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 150px;
    }

    h3 {
      line-height: 1em;
    }
  }
}

.employers-list {
  li {
    border: 0;
    img {
      border-radius: 50%;
      height: 32px;
      width: 32px;
    }
  }
}

/* The snackbar - position it at the bottom and in the middle of the screen */
.snackbar {
  background-color: #333; /* Black background color */
  border-radius: 2px; /* Rounded borders */
  bottom: 30px; /* 30px from the bottom */
  color: #fff; /* White text color */
  left: 50%; /* Center the snackbar */
  margin-left: -125px; /* Divide value of min-width by 2 */
  min-width: 250px; /* Set a default minimum width */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  text-align: center; /* Centered text */
  visibility: hidden; /* Hidden by default. Visible on click */
  z-index: 1; /* Add a z-index if needed */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
.snackbar.show {
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
  visibility: visible; /* Show the snackbar */
}

/* Animations to fade the snackbar in and out */
@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
